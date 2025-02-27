# https://turbowarp.org/editor
# Ajouter une extension
# Extension customisée
# URL
# http://localhost:8000/load_robomaster_extension
# Load
#

from flask import Flask, send_from_directory
from robomaster import robot
from pathlib import Path


app = Flask(__name__)

# Chemin du dossier contenant ton fichier
FILE_DIR = str(Path(__file__).resolve().parent)
FILE_NAME = "robomaster_extension.js"


@app.route('/load_robomaster_extension')
def serve_extension():
    return send_from_directory(FILE_DIR, FILE_NAME)


@app.route('/connectRobot', methods=['POST'])
def connect_robot():
    ep_robot = robot.Robot()
    ep_robot.initialize(conn_type="ap")

    ep_version = ep_robot.get_version()
    print("Robot Version: {0}".format(ep_version))

    ep_robot.close()

if __name__ == '__main__':
    app.run(debug=True, port=8000)
