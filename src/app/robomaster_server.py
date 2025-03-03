from flask import Flask, send_from_directory, jsonify, request
from robomaster import robot
from pathlib import Path

class RoboMasterServer:
    """
    Server Flask for controlling the RoboMaster EP.
    """
    
    def __init__(self, file_name="robomaster_extension.js", port=8000):
        """
        Initialize the RoboMaster Flask server.

        Args:
            file_name (str): JavaScript extension file name.
            port (int): Port for the local server.
        """
        self.app = Flask(__name__)
        self.file_dir = str(Path(__file__).resolve().parent)
        self.file_name = file_name
        self.port = port
        self.ep_robot = None

        # Define routes
        self.app.add_url_rule('/robomaster_extension', 'robomaster_extension', self.robomaster_extension)
        self.app.add_url_rule('/start', 'start', self.start, methods=['POST'])
        self.app.add_url_rule('/stop', 'stop', self.stop, methods=['POST'])
        self.app.add_url_rule('/move', 'move', self.move, methods=['POST'])
        self.app.add_url_rule('/rotate', 'rotate', self.rotate, methods=['POST'])
        self.app.add_url_rule('/arm', 'arm', self.arm, methods=['POST'])
        self.app.add_url_rule('/grabber', 'grabber', self.grabber, methods=['POST'])
        self.app.add_url_rule('/status', 'status', self.status, methods=['GET'])
        self.app.add_url_rule('/gimbal', 'gimbal', self.gimbal, methods=['POST'])

    def run(self):
        """
        Start the RoboMaster Flask server.
        """
        self.app.run(debug=True, port=self.port)

    def robomaster_extension(self):
        """
        Serve the JavaScript extension file.

        Returns:
            Response: The requested file.
        """
        return send_from_directory(self.file_dir, self.file_name)
    
    def safe_execute(self, func, error_message):
        """
        Execute a function safely, preventing crashes.

        Args:
            func (Callable): Function to execute.
            error_message (str): Error message if function fails.

        Returns:
            Response: JSON response indicating success or failure.
        """
        try:
            return func()
        except Exception as e:
            print(f"{error_message}: {e}")
            return jsonify({"error": error_message, "details": str(e)})

    def start(self):
        """
        Initialize the connection with the robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(lambda: self._start(), "Failed to start robot")

    def _start(self):
        """
        Internal method to start the robot.
        """
        self.ep_robot = robot.Robot()
        self.ep_robot.initialize(conn_type="ap")
        self.ep_robot.gimbal.recenter().wait_for_completed()
        return jsonify({"start": True})
    
    def stop(self):
        """
        Stop the robot connection.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(lambda: self._stop(), "Failed to stop robot")

    def _stop(self):
        """
        Internal method to stop the robot.
        """
        if self.ep_robot:
            self.ep_robot.close()
        return jsonify({"stop": True})
    
    def move(self):
        """
        Move the robot based on given parameters.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(lambda: self._move(), "Failed to move robot")
    
    def _move(self):
        """
        Internal method to move the robot.
        """
        data = request.get_json()
        x = float(data.get("x", 1))
        y = float(data.get("y", 0))
        z = float(data.get("z", 0))
        speed = float(data.get("speed", 0.5))
        self.ep_robot.chassis.move(x=x, y=y, z=z, xy_speed=speed).wait_for_completed()
        return jsonify({"move": True})
    
    def rotate(self):
        """
        Rotate the robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(lambda: self._rotate(), "Failed to rotate robot")
    
    def _rotate(self):
        """
        Internal method to rotate the robot.
        """
        data = request.get_json()
        angle = float(data.get("angle", 90))
        self.ep_robot.chassis.move(z=angle).wait_for_completed()
        return jsonify({"rotate": True})
    
    def status(self):
        """
        Get the robot's battery status.

        Returns:
            Response: JSON containing battery percentage.
        """
        return self.safe_execute(lambda: self._status(), "Failed to get status")
    
    def _status(self):
        """
        Internal method to get battery status.
        """
        battery = self.ep_robot.battery.get_percentage()
        return jsonify({"battery": battery})

# ==================== if __name__ == '__main__' ==================== #

def main() -> int:
    server = RoboMasterServer()
    server.run()
    return 0

if __name__ == '__main__':
    main()
