from flask import Flask, send_from_directory, request, jsonify
from robomaster import robot
from pathlib import Path


class RoboMasterServer:
    def __init__(self, file_name="robomaster_extension.js", port=8000):
        self.app = Flask(__name__)
        self.file_dir = str(Path(__file__).resolve().parent)
        self.file_name = file_name
        self.port = port

        # Définition des routes
        self.app.add_url_rule('/', 'serve_extension', self.serve_extension)
        self.app.add_url_rule('/connection', 'connection', self.connection, methods=['POST'])
        self.app.add_url_rule('/stop', 'stop', self.stop, methods=['POST'])
        self.app.add_url_rule('/move', 'move', self.move, methods=['POST'])

    def serve_extension(self):
        """
        Charge l'extension JavaScript sur Scratch (TurboWarp).
        
        :return: le fichier "my_extension.js"
        """
        return send_from_directory(self.file_dir, self.file_name)

    def connection(self) -> None:
        """
        Lance la connection avec le robot.
        
        :return: Message de confirmation
        """
        self.ep_robot = robot.Robot()
        self.ep_robot.initialize(conn_type="ap")
        return jsonify({"connection": True})
    
    def stop(self):
        """
        Stop la connection avec le robot.
        
        :return: Message de confirmation
        """
        self.ep_robot.close()
        return jsonify({"stop": True})
    
    def move(self, x: int=1, y: int=0, z: int=0, speed: float=0.7) -> None:
        """
        Fait avancer le robot.
        
        :return: Message de confirmation
        """
        self.ep_robot = robot.Robot()
        self.ep_robot.initialize(conn_type="ap")
        self.ep_robot.chassis.move(x=x, y=y, z=z, xy_speed=speed).wait_for_completed()
        self.ep_robot.close()
        return jsonify({"move": True})

    def run(self):
        self.app.run(debug=True, port=self.port)


#=================================== if __name__ == '__main__' ===================================#

def main() -> int:
    server = RoboMasterServer()
    server.run()  # http://localhost:8000
    return 0

if __name__ == '__main__':
    main()
