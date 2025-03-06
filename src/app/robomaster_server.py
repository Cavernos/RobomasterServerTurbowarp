import re
import socket
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from robomaster import robot
from pathlib import Path

class RoboMasterServer:
    """
    Server Flask for controlling the RoboMaster EP.
    """
    routes = []

    def __init__(self, file_name="robomaster_extension.js", port=8000):
        """
        Initialize the RoboMaster Flask server.

        Args:
            file_name (str): JavaScript extension file name.
            port (int): Port for the local server.
        """
        self.app = Flask(__name__)
        CORS(self.app)
        self.file_dir = str(Path(__file__).resolve().parent)
        self.file_name = file_name
        self.port = port
        self.ep_robot = None

        # Define routes
        self.generate_route_list(self)
        for route in self.routes:
            self.app.add_url_rule(route['url'], route['name'], route['method'], methods=['GET', 'POST'])

    def run(self):
        """
        Start the RoboMaster Flask server.
        """
        self.app.run(debug=True, port=self.port)

    @classmethod
    def generate_route_list(cls, instance):
        cls.routes.append({'name': "robomaster_extension", "url": "/robomaster_extension", "method": getattr(instance, "robomaster_extension")})
        cls.routes.append({"name": "index", "url": "/", "method": getattr(instance, "index")})
        for method_name in cls.__dict__.keys():
            if re.match('_[A-Za-z]', method_name):
                method_name = method_name.split('_')
                method_name.pop(0)
                method_name = "_".join(method_name)
                cls.routes.append({'name': method_name, 'url': f"/{method_name}", "method": getattr(instance, method_name)})

    def index(self):
        return jsonify({"api": "ok !"})


    def get_robot_ip(self):
        return self.safe_execute(self._get_robot_ip, "No Robot in the same LAN")

    def _get_robot_ip(self):
        ip_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        ip_sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        ip_sock.settimeout(2)
        port = 40926
        ip_sock.bind(('0.0.0.0', port))
        ip_str = ip_sock.recv(1024).decode('utf-8')
        ip_addr = ip_str.split()[-1]
        return jsonify({"robot_ip": ip_addr})

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
        
    # -------------------- BLOC FUNCTIONS -------------------- #

    def start(self):
        """
        Initialize connection with the RoboMaster robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._start, "Failed to start connection")

    def _start(self):
        """
        Internal method to initialize connection.
        """
        self.ep_robot = robot.Robot()
        self.ep_robot.initialize(conn_type="ap")
        return jsonify({"start": True})
    
    def stop(self):
        """
        Stop the connection with the RoboMaster robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._stop, "Failed to stop connection")

    def _stop(self):
        """
        Internal method to stop connection.
        """
        self.ep_robot.close()
        return jsonify({"stop": True})
    
    def move(self):
        """
        Move the robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._move, "Failed to move robot")
    
    def _move(self):
        """
        Internal method to move the robot.
        """
        data = request.get_json()
        x = float(data.get("x", 0))
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
        return self.safe_execute(self._rotate, "Failed to rotate robot")
    
    def _rotate(self):
        """
        Internal method to rotate the robot.
        """
        data = request.get_json()
        angle = float(data.get("angle", 0))
        speed = float(data.get("speed", 30))
        self.ep_robot.chassis.move(z=angle, xy_speed=speed).wait_for_completed()
        return jsonify({"rotate": True})
    
    def arm(self):
        """
        Control the robotic arm.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._arm, "Failed to control arm")
    
    def _arm(self):
        """
        Internal method to control the arm.
        """
        data = request.get_json()
        position = int(data.get("position", 1))
        self.ep_robot.robotic_arm.move_to(position).wait_for_completed()
        return jsonify({"arm": True})
    
    def grabber(self):
        """
        Control the grabber.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._grabber, "Failed to control grabber")
    
    def _grabber(self):
        """
        Internal method to control the grabber.
        """
        data = request.get_json()
        action = data.get("action", "open")
        if action == "open":
            self.ep_robot.grabber.open().wait_for_completed()
        else:
            self.ep_robot.grabber.close().wait_for_completed()
        return jsonify({"grabber": True})


# ==================== if __name__ == '__main__' ==================== #

def main() -> int:
    server = RoboMasterServer()
    server.run()  # http://localhost:8000/robomaster_extension
    return 0

if __name__ == '__main__':
    main()
