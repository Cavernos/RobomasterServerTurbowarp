
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from robomaster import robot
import pyttsx3, nmap, subprocess, re, os
from pathlib import Path

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
        self.file_dir = str(Path(__file__).resolve().parent)
        self.file_name = file_name
        self.port = port
        self.ep_robot = None

        # Define routes
        self.generate_route_list(self)
        for route in self.routes:
            self.app.add_url_rule(route['url'], route['name'], route['method'], methods=['GET', 'POST'])
        self.file_list = []

    def run(self):
        """
        Start the RoboMaster Flask server.
        """
        self.app.run(debug=True, port=self.port)

    @classmethod
    def generate_route_list(cls, instance):
        cls.routes.append({'name': "robomaster_extension", "url": "/robomaster_extension", "method": getattr(instance, "robomaster_extension")})
        cls.routes.append({"name": "index", "url": "/", "method": getattr(instance, "index")})
        for method_name in cls.__dict__.keys():
            if re.match('_[A-Za-z]', method_name):
                method_name = method_name.split('_')
                method_name.pop(0)
                method_name = "_".join(method_name)
                cls.routes.append({'name': method_name, 'url': f"/{method_name}", "method": getattr(instance, method_name)})

    def index(self):
        return jsonify({"api": "ok !"})


    def get_robot_ip(self):
        return self.safe_execute(self._get_robot_ip, "No Robot in the same LAN")

    def _get_robot_ip(self):

        scan = nmap.PortScanner()
        scan.scan("192.168.0.0-255", '22')
        #port = 40926
        ip_addr = scan.all_hosts()

        return jsonify({"robot_ip": ip_addr})

    def robomaster_extension(self):
        """
        Serve the JavaScript extension file.

        Returns:
            Response: The requested file.
        """
        return send_from_directory(self.file_dir+'/assets/js/', self.file_name)
    
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
        self.ep_robot = robot.Robot()
        #self.ep_robot.initialize(conn_type="sta")
        self.ep_robot.initialize()
        return jsonify({"start": True})
    
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
        self.ep_robot.close()
        return jsonify({"stop": True})
    
    def move(self):
        """
        Move the robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._move, "Failed to move robot")
    
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
    
    def rotate(self):
        """
        Rotate the robot.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._rotate, "Failed to rotate robot")
    
    def _rotate(self):
        """
        Internal method to rotate the robot.
        """
        data = request.get_json()
        angle = float(data.get("angle", 0))
        speed = float(data.get("speed", 30))
        self.ep_robot.chassis.move(z=angle, xy_speed=speed).wait_for_completed()
        return jsonify({"rotate": True})
    
    def arm(self):
        """
        Control the robotic arm.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._arm, "Failed to control arm")
    
    def _arm(self):
        """
        Internal method to control the arm.
        """
        data = request.get_json()
        if data.get("position", 1) == "up":
            position = (255, 255)
        else:
            position = (0, 0)
        self.ep_robot.robotic_arm.moveto(position[0], position[1]).wait_for_completed()
        return jsonify({"arm": True})
    
    def grabber(self):
        """
        Control the grabber.

        Returns:
            Response: JSON indicating success.
        """
        return self.safe_execute(self._grabber, "Failed to control grabber")
    
    def _grabber(self):
        """
        Internal method to control the grabber.
        """
        data = request.get_json()
        action = data.get("action", "open")
        if action == "open":
            self.ep_robot.gripper.open()
        else:
            self.ep_robot.gripper.close()
        return jsonify({"grabber": True})

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
