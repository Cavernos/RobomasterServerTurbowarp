from flask import Flask, send_from_directory, jsonify, request
from robomaster import robot
from pathlib import Path


class RoboMasterServer:
    
    def __init__(self, file_name="robomaster_extension.js", port=8000):
        """
        Init robomaster flask server.

        Args:
            file_name (str, optional): JS extension file name. Defaults to "robomaster_extension.js".
            port (int, optional): Local port used. Defaults to 8000.
        """
        self.app = Flask(__name__)
        self.file_dir = str(Path(__file__).resolve().parent)
        self.file_name = file_name
        self.port = port

        # Définition des routes
        self.app.add_url_rule('/', 'load_robomaster_extension', self.load_robomaster_extension)
        self.app.add_url_rule('/start', 'start', self.start, methods=['POST'])
        self.app.add_url_rule('/stop', 'stop', self.stop, methods=['POST'])
        self.app.add_url_rule('/move', 'move', self.move, methods=['POST'])

    def run(self):
        """
        Start the robomaster flask server.
        """
        self.app.run(debug=True, port=self.port)

    def load_robomaster_extension(self):
        """
        Load JavaScript extension.

        Returns:
            _type_: robomaster_extension.js
        """
        return send_from_directory(self.file_dir, self.file_name)
    
    # -------------------- BLOC FUNTIONS -------------------- #

    def start(self) -> None:
        """
        Start the connection with the robot.

        Returns:
            dict: Confirmation message.
        """
        self.ep_robot = robot.Robot()
        self.ep_robot.initialize(conn_type="ap")
        return jsonify({"start": True})
    
    def stop(self):
        """
        Stop the connection with the robot.

        Returns:
            dict: Confirmation message.
        """
        self.ep_robot.close()
        return jsonify({"stop": True})
    
    def move(self):
        """
        Move the robot with user-defined parameters.

        Returns:
            dict: Confirmation message.
        """
        data = request.get_json()
        x = float(data.get("x", 1))
        y = float(data.get("y", 0))
        z = float(data.get("z", 0))
        speed = float(data.get("speed", 0.5))
        
        self.ep_robot.chassis.move(x=x, y=y, z=z, xy_speed=speed).wait_for_completed()
        return jsonify({"move": True})


# ==================== if __name__ == '__main__' ==================== #

def main() -> int:
    server = RoboMasterServer()
    server.run()  # http://localhost:8000/
    return 0

if __name__ == '__main__':
    main()
