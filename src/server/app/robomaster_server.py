import os
from tkinter.constants import EXTENDED

import pyttsx3
import re
import subprocess

from lib.Connection import ConnectionMode
from app.config import ENV,HOST, PORT, APP_DIR, ROUTER, ASSETS_DIR, APP_KEY
from app.tabs import RobomasterBasics, LedEffects, Chassis, ExtensionModule, Armor, Media, Sensor, SensorAdapter, Smart
from flask import Flask, session, send_from_directory, jsonify, request,render_template,url_for
from flask_cors import CORS
from flask_talisman import Talisman
#from werkzeug.middleware.proxy_fix import ProxyFix




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
        self.app.secret_key = APP_KEY
        CORS(self.app, supports_credentials=True)
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
        self.host = HOST
        self.port = PORT
        ROUTER.route_generator(self.app)


    def run(self):
        """
        Start the RoboMaster Flask server.
        """
        if ENV == "production":
            #self.app.wsgi_app = ProxyFix(self.app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1)
            self.app.run(ssl_context=('/home/robomaster/ssl-certificate/cert.pem', '/home/robomaster/ssl-certificate/key.pem'), host=self.host, port=self.port)
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

