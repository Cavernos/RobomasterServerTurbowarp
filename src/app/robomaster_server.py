from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from flask_talisman import Talisman
from werkzeug.middleware.proxy_fix import ProxyFix
import pyttsx3, subprocess, re, os



from config.config import ENV
from lib.Connection import StaMode


class RoboMasterServer:
    """
    Server Flask for controlling the RoboMaster EP.
    """
    routes = []

    def __init__(self, file_name="index.js", port=8000):
        """
        Initialize the RoboMaster Flask server.

        Args:
            file_name (str): JavaScript extension file name.
            port (int): Port for the local server.
        """
        self.app = Flask(__name__)
        CORS(self.app)
        Talisman(self.app)
        self.robot_connection = StaMode()
        self.file_dir = os.path.abspath(os.path.dirname(__file__))
        self.file_name = file_name
        self.port = port
        self.ep_robot = self.robot_connection.get_robot()

        # Define routes
        self.generate_route_list(self)
        for route in self.routes:
            self.app.add_url_rule(route['url'], route['name'], route['method'], methods=['GET', 'POST'])
        self.file_list = []

    def run(self):
        """
        Start the RoboMaster Flask server.
        """
        if ENV == "production":
            self.app.wsgi_app = ProxyFix(self.app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1)
            self.app.run(ssl_context="adhoc", host="0.0.0.0", port=self.port)
        else:
            self.app.run(debug=True, port=self.port)

    @classmethod
    def generate_route_list(cls, instance):
        cls.routes.append({'name': "robomaster_extension", "url": "/robomaster_extension", "method": getattr(instance, "robomaster_extension")})
        cls.routes.append({"name": "index", "url": "/", "method": getattr(instance, "index")})
        for method_name in cls.__dict__.keys():
            if re.match('_[A-Za-z]', method_name):
                method_name = method_name.split('_')
                method_name.pop(0)
                method = "_".join(method_name)
                for i, char in enumerate(method_name):
                    if i > 0:
                        method_name[i] = char.title()
                name = "".join(method_name)

                cls.routes.append({'name': name, 'url': f"/{name}", "method": getattr(instance, method)})

    def index(self):
        dict_routes = []
        for route in self.routes:
            dict_routes.append({route['name']: route['url']})

        return jsonify({"api": "ok !", "available_routes": dict_routes})

    def robomaster_extension(self):
        """
        Serve the JavaScript extension file.

        Returns:
            Response: The requested file.
        """
        return send_from_directory(os.path.join(self.file_dir, 'assets', 'js'), self.file_name)
    
    def safe_execute(self, func, error_message):
        """
        Execute a function safely, preventing crashes.

        Args:
            func (Callable): Function to execute.
            error_message (str): Error message if function fails.

        Returns:
            Response: JSON response indicating success or failure.
        """
        try:
            return func()
        except Exception as e:
            print(f"{error_message}: {e}")
            return jsonify({"error": error_message, "details": str(e)})

    # -------------------- BLOC FUNCTIONS -------------------- #

    # Robomaster Basics

    # start
    def start(self):
        """
        Initialize connection with the RoboMaster robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._start, "Failed to start connection")

    def _start(self):
        """
        Internal method to initialize connection.
        """
        data = request.get_json()
        self.robot_connection.connect("sta", data.get("sn"))
        self.ep_robot = self.robot_connection.get_robot()
        return jsonify({"start": self.robot_connection.connect("sta", data.get("sn"))})
    
    # stop
    def stop(self):
        """
        Stop the connection with the RoboMaster robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._stop, "Failed to stop connection")

    def _stop(self):
        """
        Internal method to stop connection.
        """
        if self.ep_robot.connect(self.robot_connection.conn_type, self.robot_connection.sn):
            self.ep_robot.close()
        return jsonify({"stop": True})
    

    # LED Effects

    # set_flash
    def set_flash(self):
        return self.safe_execute(self._set_flash, "Failed to set flash")

    def _set_flash(self):
        return jsonify({"set_flash": True})

    # set_bottom_led
    def set_bottom_led(self):
        return self.safe_execute(self._set_bottom_led, "Failed to set bottom flash")

    def _set_bottom_led(self):
        return jsonify({"set_bottom_led": True})

    # set_top_led
    def set_top_led(self):
        return self.safe_execute(self._set_top_led, "Failed to set top flash")

    def _set_top_led(self):
        return jsonify({"set_top_led": True})

    # set_signle_led
    def set_signle_led(self):
        return self.safe_execute(self._set_signle_led, "Failed to set signle led")

    def _set_signle_led(self):
        return jsonify({"set_signle_led": True})

    # turn_off
    def turn_off(self):
        return self.safe_execute(self._turn_off, "Failed to turn off")

    def _turn_off(self):
        return jsonify({"turn_off": True})


    # Chassis

    # set_pwm_value
    def set_pwm_value(self):
        return self.safe_execute(self._set_pwm_value, "Failed to set pwm value")

    def _set_pwm_value(self):
        return jsonify({"set_pwm_value": True})

    # enable_stick_overlay
    def enable_stick_overlay(self):
        return self.safe_execute(self._enable_stick_overlay, "Failed to enable stick overlay")

    def _enable_stick_overlay(self):
        return jsonify({"enable_stick_overlay": True})

    # set_follow_gimbal_offset
    def set_follow_gimbal_offset(self):
        return self.safe_execute(self._set_follow_gimbal_offset, "Failed to set follow gimbaloffset")

    def _set_follow_gimbal_offset(self):
        return jsonify({"set_follow_gimbal_offset": True})

    # set_trans_speed
    def set_trans_speed(self):
        return self.safe_execute(self._set_trans_speed, "Failed to set_trans_speed")

    def _set_trans_speed(self):
        return jsonify({"set_trans_speed": True})

    # set_rotate_speed
    def set_rotate_speed(self):
        return self.safe_execute(self._set_rotate_speed, "Failed to set rotate speed")

    def _set_rotate_speed(self):
        return jsonify({"set_rotate_speed": True})

    # set_wheel_speed
    def set_wheel_speed(self):
        return self.safe_execute(self._set_wheel_speed, "Failed to set wheel speed")

    def _set_wheel_speed(self):
        return jsonify({"set_pwm_value": True})

    # move
    def move(self):
        """
        Move the robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._move, "Failed to move")
    
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
    
    # move_with_time
    def move_with_time(self):
        return self.safe_execute(self._move_with_time, "Failed to move with time")

    def _move_with_time(self):
        return jsonify({"move_with_time": True})

    # move_with_distance
    def move_with_distance(self):
        return self.safe_execute(self._move_with_distance, "Failed to move with distance")

    def _move_with_distance(self):
        return jsonify({"move_with_distance": True})

    # move_degree_with_speed
    def move_degree_with_speed(self):
        return self.safe_execute(self._move_degree_with_speed, "Failed to move degree with speed")

    def _move_degree_with_speed(self):
        return jsonify({"move_degree_with_speed": True})

    # rotate
    def rotate(self):
        """
        Rotate the robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._rotate, "Failed to rotate")
    
    def _rotate(self):
        """
        Internal method to rotate the robot.
        """
        data = request.get_json()
        angle = float(data.get("angle", 0))
        speed = float(data.get("speed", 30))
        self.ep_robot.chassis.move(z=angle, xy_speed=speed).wait_for_completed()
        return jsonify({"rotate": True})
    
    # rotate_with_time
    def rotate_with_time(self):
        return self.safe_execute(self._rotate_with_time, "Failed to rotate with time")

    def _rotate_with_time(self):
        return jsonify({"rotate_with_time": True})

    # rotate_with_degree
    def rotate_with_degree(self):
        return self.safe_execute(self._rotate_with_degree, "Failed to rotate with degree")

    def _rotate_with_degree(self):
        return jsonify({"rotate_with_degree": True})

    # move_and_rotate
    def move_and_rotate(self):
        return self.safe_execute(self._move_and_rotate, "Failed to move and rotate")

    def _move_and_rotate(self):
        return jsonify({"move_and_rotate": True})

    # move_with_speed
    def move_with_speed(self):
        return self.safe_execute(self._move_with_speed, "Failed to move with speed")

    def _move_with_speed(self):
        return jsonify({"move_with_speed": True})

    ## stop
    #def stop(self):
    #    return self.safe_execute(self._stop, "Failed to stop")
    #
    #def _stop(self):
    #    return jsonify({"stop": True})

    # get_attitude
    def get_attitude(self):
        return self.safe_execute(self._get_attitude, "Failed to get attitude")

    def _get_attitude(self):
        return jsonify({"get_attitude": True})

    # get_position_based_power_on
    def get_position_based_power_on(self):
        return self.safe_execute(self._get_position_based_power_on, "Failed to get position based power on")

    def _get_position_based_power_on(self):
        return jsonify({"get_position_based_power_on": True})

    # chassis_impact_detection
    def chassis_impact_detection(self):
        return self.safe_execute(self._chassis_impact_detection, "Failed to chassis impact detection")

    def _chassis_impact_detection(self):
        return jsonify({"chassis_impact_detection": True})

    # is_impact
    def is_impact(self):
        return self.safe_execute(self._is_impact, "Failed to is impact")

    def _is_impact(self):
        return jsonify({"is_impact": True})


    # Extension Module

    def set_gripper(self):
        """
        Control the gripper.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._set_gripper, "Failed to control gripper")

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

    def arm_move(self):
        """
        Control the robotic arm.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._arm, "Failed to control arm")

    def arm(self):
        return self.safe_execute(self._arm, "Failed to control arm")
    
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
    
    def arm_move_to(self):
        """
        Control the robotic arm.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._arm_move_to, "Failed to control arm")
    
    def _arm_move_to(self):
        """
        Internal method to control the arm.
        """
        data = request.get_json()
        x = int(data.get("x", 1))
        y = int(data.get("y", 1))
        self.ep_robot.robotic_arm.move_to(x=x, y=y).wait_for_completed()
        return jsonify({"arm": True})


    # Smart




    # Armor

    # set_hit_sensitivity
    def set_hit_sensitivity(self):
        return self.safe_execute(self._set_hit_sensitivity, "Failed to set flash")

    def _set_hit_sensitivity(self):
        return jsonify({"set_hit_sensitivity": True})

    # armor_hit_detection_all
    def armor_hit_detection_all(self):
        return self.safe_execute(self._armor_hit_detection_all, "Failed to set flash")

    def _armor_hit_detection_all(self):
        return jsonify({"armor_hit_detection_all": True})

    # get_last_hit_index
    def get_last_hit_index(self):
        return self.safe_execute(self._get_last_hit_index, "Failed to set flash")

    def _get_last_hit_index(self):
        return jsonify({"get_last_hit_index": True})

    # check_condition
    def check_condition(self):
        return self.safe_execute(self._check_condition, "Failed to set flash")

    def _check_condition(self):
        return jsonify({"is_impact": True})

    # cond_wait
    def cond_wait(self):
        return self.safe_execute(self._cond_wait, "Failed to set flash")

    def _cond_wait(self):
        return jsonify({"cond_wait": True})


    # Sensor




    # Sensor Adapter




    # Media

    # play_sound
    def play_sound(self):
        return self.safe_execute(self._play_sound, "Failed to set flash")

    def _play_sound(self):
        return jsonify({"play_sound": True})

    # play_sound
    def play_sound(self):
        return self.safe_execute(self._play_sound, "Failed to set flash")

    def _play_sound(self):
        return jsonify({"play_sound": True})

    # capture
    def capture(self):
        return self.safe_execute(self._capture, "Failed to set flash")

    def _capture(self):
        return jsonify({"capture": True})

    # record
    def record(self):
        return self.safe_execute(self._record, "Failed to set flash")

    def _record(self):
        return jsonify({"cond_wait": True})

    # say


    def say(self):
        return self.safe_execute(self._say, "Failed to say something")

    def _say(self):
        self.ep_robot.play_audio(filename=f"test.wav").wait_for_completed()
        data = request.get_json()
        engine = pyttsx3.init()
        texte = data.get("say")
                # texte = input("Entrez le texte à prononcer : ")

                    # Paramétrages optionnels : voix, vitesse, volume...
                    # Liste des voix disponibles
        if texte.lower() not in self.file_list:
            self.file_list.append(texte)
            voices = engine.getProperty('voices')
            for idx, voice in enumerate(voices):
                    print(idx, voice.name, voice.id)

                        # Exemple : choisir la première voix
            engine.setProperty('voice', voices[0].id)
                        # Régler la vitesse de la parole (par défaut ~200 mots/min)
            engine.setProperty('rate', 150)

                        # Lecture du texte à voix haute (sortie haut-parleurs)

                        # Enregistrement du texte dans un fichier audio WAV
            nom_fichier = f"_{self.file_list.index(texte)}.wav"
            os.chdir(self.file_dir)
            engine.save_to_file(texte, nom_fichier)
            engine.runAndWait()
            subprocess.run([ "ffmpeg", "-i", nom_fichier, "-ar", "48000", "-ac",  "2", "-c:a", "pcm_s16le", f"{self.file_list.index(texte)}.wav" ])
            os.remove(nom_fichier)

        print(f"Lecture du fichier audio '{self.file_list.index(texte)}'...")
        self.ep_robot.play_audio(filename={self.file_list.index(texte)}).wait_for_completed()
        print("Lecture terminée.")
        return jsonify({"saying": data.get("say")})

# ==================== if __name__ == '__main__' ==================== #

def main() -> int:
    server = RoboMasterServer()
    server.run()  # http://localhost:8000/robomaster_extension
    return 0

if __name__ == '__main__':
    main()
