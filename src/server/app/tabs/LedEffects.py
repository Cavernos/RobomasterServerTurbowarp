from lib.Tabs import Tab
from flask import jsonify

class LedEffects(Tab):
    """
    LedEffects define Led effects tab for robot
    """
    def __init__(self, robot_connection):
        """LedEffects constructor
        Args:
            robot_connection (ConnectionMode) To get the robot
        """
        super().__init__(robot_connection)


    def _set_flash(self):
        return jsonify({"set_flash": True})

    def _set_bottom_led(self):
        return jsonify({"set_bottom_led": True})

    def _set_top_led(self):
        return jsonify({"set_top_led": True})

    def _set_signle_led(self):
        return jsonify({"set_signle_led": True})

    def _turn_off(self):
        return jsonify({"turn_off": True})