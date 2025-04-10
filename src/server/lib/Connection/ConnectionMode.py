import logging

from flask import request, session
from robomaster import robot

class ConnectionMode:
    """
    Define a class for all methods related to robot connection by router
    """

    def __init__(self):
        self.robot_dict = {}
        self.sn = ""
        self.conn_type = "sta"

    def connect(self, sn: str) -> bool:
        if sn not in self.robot_dict.keys():
            self.robot_dict[sn] =  robot.Robot()
        try:
                # Example "3JKCK7E0030BMR"
                self.robot_dict[sn].initialize(conn_type=self.conn_type, sn=sn)
                return True
        except Exception as e:
            logging.error("Failed to initialize robot : try to reconnect the robot on the router")
            return False

    def close(self, sn: str) -> bool:
        if sn in self.robot_dict.keys():
            self.robot_dict[sn].close()
            del self.robot_dict[sn]
            return True
        else:
            return False
    def get_robot(self, sn):
        if sn in self.robot_dict.keys():
            return self.robot_dict[sn]
