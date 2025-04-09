from lib.Tabs import Tab
from flask import jsonify

class Armor(Tab):
    def __init__(self, robot_connection):
        super().__init__(robot_connection)




    def _set_hit_sensitivity(self):
        return jsonify({"set_hit_sensitivity": True})

    def _armor_hit_detection_all(self):
        return jsonify({"armor_hit_detection_all": True})


    def _get_last_hit_index(self):
        return jsonify({"get_last_hit_index": True})

    def _check_condition(self):
        return jsonify({"is_impact": True})

    def _cond_wait(self):
        return jsonify({"cond_wait": True})