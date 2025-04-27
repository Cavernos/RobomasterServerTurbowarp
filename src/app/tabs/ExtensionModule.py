from lib.Tabs import Tab
from flask import jsonify, request

class ExtensionModule(Tab):
    def __init__(self, robot_connection):
        super().__init__(robot_connection)

    def _set_gripper(self):
        """
        Internal method to control the gripper.
        """
        data = request.get_json()
        action = str(data.get('action', 'open'))
        print(action)
        if action == 'open':
            self.ep_robot.gripper.open()
        elif action == 'close':
            self.ep_robot.gripper.close().wait_for_completed()
        elif action == 'stop':
            self.ep_robot.gripper.stop().wait_for_completed()
        return jsonify({'set_gripper': True})


    def _arm(self):
        """
        Internal method to control the arm.
        """
        data = request.get_json()
        direction = int(data.get("direction", "forward"))
        distance = int(data.get("distance", 1))
        if direction == "forward":
            self.ep_robot.robotic_arm.move(x=distance, y=0).wait_for_completed()
        elif direction == "backward":
            self.ep_robot.robotic_arm.move(x=-distance, y=0).wait_for_completed()
        elif direction == "up":
            self.ep_robot.robotic_arm.move(x=0, y=distance).wait_for_completed()
        elif direction == "down":
            self.ep_robot.robotic_arm.move(x=0, y=-distance).wait_for_completed()
        return jsonify({"arm": True})



    def _arm_move_to(self):
        """
        Internal method to control the arm.
        """
        data = request.get_json()
        x = int(data.get("x", 1))
        y = int(data.get("y", 1))
        self.ep_robot.robotic_arm.move_to(x=x, y=y).wait_for_completed()
        return jsonify({"arm": True})