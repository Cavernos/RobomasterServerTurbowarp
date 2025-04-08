from robomaster import robot
from flask import jsonify, request
from app.config import ROUTER


# @classmethod
# def generate_route_list(cls, instance):
#
#
#             cls.routes.append({'name': name, 'url': f"/{name}", "method": getattr(instance, method)})
class RobomasterBasics:
    """
    RobomasterBasics class represent all the function related to same name tab
    """
    def __init__(self, robot_connection) -> None:
        """
        Initialize the RoboMaster Flask server.

        Args:
            robot_conection (None | robot.Robot): Robot Connection instance.
        """
        self.robot_connection = robot_connection

    def _start(self):
        """
        Internal method to initialize connection.
        """
        data = request.get_json()
        self.robot_connection.connect("sta", data.get("sn"))
        self.ep_robot = self.robot_connection.get_robot()
        return jsonify({"start": self.robot_connection.connect("sta", data.get("sn"))})

    def _stop(self):
        """
        Internal method to stop connection.
        """
        robot = self.robot_connection.get_robot()
        if robot.connect(self.robot_connection.conn_type, self.robot_connection.sn):
            robot.close()
            self.robot_connection.ep_robot = None
        return jsonify({"stop": True})

