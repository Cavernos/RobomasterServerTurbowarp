import logging

from robomaster import robot
from flask import jsonify, request
import re

import app.tabs
from app.config import ROUTER
from lib.Tabs import Tab


class RobomasterBasics(Tab):
    """
    RobomasterBasics class represent all the function related to same name tab
    """
    def __init__(self, robot_connection) -> None:
        """
        Initialize the RoboMaster Flask server.

        Args:
            robot_conection (None | robot.Robot): Robot Connection instance.
        """
        super().__init__(robot_connection)


    def _start(self):
        """
        Internal method to initialize connection.
        """
        data = request.get_json()
        response = self.robot_connection.connect(data.get("sn"))
        return jsonify({"start": response})

    def _stop(self):
        """
        Internal method to stop connection.
        """
        if self.robot_connection.connect(self.robot_connection.sn):
            self.robot_connection.close()
            self.robot_connection.ep_robot = None
        return jsonify({"stop": True})

