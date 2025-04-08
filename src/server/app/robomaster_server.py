import os
from tkinter.constants import EXTENDED

import pyttsx3
import re
import subprocess

from lib.Connection import ConnectionMode
from app.config import ENV, PORT, APP_DIR, ROUTER, ASSETS_DIR
from app.tabs import RobomasterBasics, LedEffects, Chassis, ExtensionModule, Armor, Media, Sensor, SensorAdapter, Smart
from flask import Flask, send_from_directory, jsonify, request,render_template,url_for
from flask_cors import CORS
from flask_talisman import Talisman

from werkzeug.middleware.proxy_fix import ProxyFix




class RoboMasterServer:
    """
    Server Flask for controlling the RoboMaster EP.
    """
    routes = []

    def __init__(self):
        """
        Initialize the RoboMaster Flask server.
        """
        self.app = Flask(__name__)
        CORS(self.app)
        Talisman(self.app)
        self.robot_connection = ConnectionMode()
        self.tabs = [
            RobomasterBasics(self.robot_connection),
            LedEffects(self.robot_connection),
            Chassis(self.robot_connection),
            ExtensionModule(self.robot_connection),
            Armor(self.robot_connection),
            Media(self.robot_connection),
            Sensor(self.robot_connection),
            SensorAdapter(self.robot_connection),
            Smart(self.robot_connection)
        ]
        self.app_dir = APP_DIR
        self.port = PORT
        ROUTER.route_generator(self.app)




    def run(self):
        """
        Start the RoboMaster Flask server.
        """
        if ENV == "production":
            self.app.wsgi_app = ProxyFix(self.app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1)
            self.app.run(ssl_context="adhoc", host="0.0.0.0", port=self.port)
        else:
            self.app.run(debug=True, port=self.port)

    @staticmethod
    def index():
        return render_template('index.j2', routes=ROUTER.routes)
    @staticmethod
    def favicon():
        return send_from_directory(os.path.join(ASSETS_DIR, 'img'),
                                   'favicon.ico', mimetype='image/vnd.microsoft.icon')
    @staticmethod
    def robomaster_extension():
        """
        Serve the JavaScript extension file.

        Returns:
            Response: The requested file.
        """
        return send_from_directory(os.path.join(APP_DIR, 'assets', 'js'), 'index.js', as_attachment=True)
    


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


    
    # stop
    def stop(self):
        """
        Stop the connection with the RoboMaster robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._stop, "Failed to stop connection")


    

    # LED Effects




    # Chassis

    # set_pwm_value



    # Extension Module




    # Smart




    # Armor




    # Sensor




    # Sensor Adapter




    # Media


# ==================== if __name__ == '__main__' ==================== #

def main() -> int:
    server = RoboMasterServer()
    server.run()  # http://localhost:8000/robomaster_extension
    return 0

if __name__ == '__main__':
    main()
