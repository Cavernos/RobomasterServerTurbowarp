import logging

from robomaster import robot
from flask import jsonify, request, session
import re

import app.tabs
from app.config import ROUTER
from lib.Tabs import Tab
from app.config import SN


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
        session[request.remote_addr] = SN[int(data.get("sn"))-1]
        response = self.robot_connection.connect(SN[int(data.get("sn"))-1])
        return jsonify({"start": response})

    def _stop(self):
        """
        Internal method to stop connection.
        """
        close = self.robot_connection.close()
        if close:
            session.pop(request.remote_addr)
        return jsonify({"stop": close})

