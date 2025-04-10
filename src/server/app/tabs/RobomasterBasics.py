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
        print(session)
        data = request.get_json()
        ip_addr = request.environ.get('HTTP_X_FORWARDED_FOR', request.remote_addr)
        if ip_addr in session.keys():
            self.ep_robot = self.robot_connection.get_robot(session[ip_addr])
            response = True
        else:
            session[ip_addr] = SN[int(data.get("sn"))-1]
            response = self.robot_connection.connect(SN[int(data.get("sn"))-1])
            self.ep_robot = self.robot_connection.get_robot(SN[int(data.get("sn"))-1])
        print(session)
        return jsonify({"start": response})

    def _stop(self):
        """
        Internal method to stop connection.
        """
        ip_addr = request.environ.get('HTTP_X_FORWARDED_FOR', request.remote_addr)
        close = False
        if ip_addr in session.keys():
            close = self.robot_connection.close(session[ip_addr])
            del session[ip_addr]
        return jsonify({"stop": close})

