import logging

from robomaster import robot

class StaMode:
    """
    Define a class for all methods related to robot connection by router
    """

    def __init__(self):
        self.ep_robot = None
        self.sn = ""
        self.conn_type = "ap"

    def connect(self, conn_type: str, sn: str) -> bool:
        self.ep_robot = robot.Robot()
        try:
            if self.ep_robot.initialize(conn_type=conn_type, sn=sn):
                self.sn = sn
                self.conn_type = conn_type
                return self.ep_robot.initialize(conn_type=conn_type, sn=sn)
        except Exception as e:
            self.ep_robot = None
            logging.error("Failed to initialize robot : try to reconnect the robot on the router")

    def get_robot(self):
        if self.ep_robot is not None:
            return self.ep_robot