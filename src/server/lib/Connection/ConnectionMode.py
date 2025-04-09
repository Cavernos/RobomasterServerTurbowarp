import logging

from robomaster import robot
from app.config import ENV

class ConnectionMode:
    """
    Define a class for all methods related to robot connection by router
    """

    def __init__(self):
        self.ep_robot = None
        self.sn = ""
        self.conn_type = "ap" if ENV != "production" else "sta"

    def connect(self, sn: str) -> bool:
        self.ep_robot = robot.Robot()
        try:
                self.sn = sn
                self.ep_robot.initialize(conn_type=self.conn_type, sn=sn)
                return True
        except Exception as e:
            self.ep_robot = None
            logging.error("Failed to initialize robot : try to reconnect the robot on the router")
            return False

    def get_robot(self):
        if self.ep_robot is not None:
            return self.ep_robot