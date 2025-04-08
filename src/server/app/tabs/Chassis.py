from lib.Tabs import Tab
from flask import jsonify, request

class Chassis(Tab):
    """
        Chassi define chassis tab for robot
    """
    def __init__(self, robot_connection):
        """Chassis constructor
                Args:
                    robot_connection (ConnectionMode) To get the robot
        """
        super().__init__(robot_connection)

    def _set_pwm_value(self):
        return jsonify({"set_pwm_value": True})



    def _enable_stick_overlay(self):
        return jsonify({"enable_stick_overlay": True})




    def _set_follow_gimbal_offset(self):
        return jsonify({"set_follow_gimbal_offset": True})



    def _set_trans_speed(self):
        return jsonify({"set_trans_speed": True})



    def _set_rotate_speed(self):
        return jsonify({"set_rotate_speed": True})



    def _set_wheel_speed(self):
        return jsonify({"set_pwm_value": True})



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



    def _move_with_time(self):
        return jsonify({"move_with_time": True})



    def _move_with_distance(self):
        return jsonify({"move_with_distance": True})



    def _move_degree_with_speed(self):
        return jsonify({"move_degree_with_speed": True})



    def _rotate(self):
        """
        Internal method to rotate the robot.
        """
        data = request.get_json()
        angle = float(data.get("angle", 0))
        speed = float(data.get("speed", 30))
        self.ep_robot.chassis.move(z=angle, xy_speed=speed).wait_for_completed()
        return jsonify({"rotate": True})

    def _rotate_with_time(self):
        return jsonify({"rotate_with_time": True})

    def _rotate_with_degree(self):
        return jsonify({"rotate_with_degree": True})

    def _move_and_rotate(self):
        return jsonify({"move_and_rotate": True})

    def _move_with_speed(self):
        return jsonify({"move_with_speed": True})


    def _get_attitude(self):
        return jsonify({"get_attitude": True})

    def _get_position_based_power_on(self):
        return jsonify({"get_position_based_power_on": True})


    def _chassis_impact_detection(self):
        return jsonify({"chassis_impact_detection": True})

    def _is_impact(self):
        return jsonify({"is_impact": True})