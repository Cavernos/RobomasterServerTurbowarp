from lib.Tabs import Tab
from app.config import ASSETS_DIR
import pyttsx3
import os
import subprocess
from flask import jsonify, request, session

class Media(Tab):
    def __init__(self, robot_connection):
        super().__init__(robot_connection)

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



    def _say(self):
        print(session)
        if request.environ.get('HTTP_X_FORWARDED_FOR', request.remote_addr) in self.__class__.robot_user_table.keys():
            self.ep_robot = self.robot_connection.get_robot(self.__class__.robot_user_table.get(request.environ.get('HTTP_X_FORWARDED_FOR', request.remote_addr)))
        else:
            return jsonify({"error": "Error in say function"})
        data = request.get_json()
        engine = pyttsx3.init()
        texte = data.get("say").lower()
        files_list = [f for f in os.listdir(os.path.join(ASSETS_DIR, "audio", "say"))]
        for word in texte.split(' '):
            if f'{word}.wav' not in files_list:
                # texte = input("Entrez le texte à prononcer : ")

                    # Paramétrages optionnels : voix, vitesse, volume...
                    # Liste des voix disponibles
                voices = engine.getProperty('voices')
                for idx, voice in enumerate(voices):
                        print(idx, voice.name, voice.id)

                            # Exemple : choisir la première voix
                engine.setProperty('voice', voices[0].id)
                            # Régler la vitesse de la parole (par défaut ~200 mots/min)
                engine.setProperty('rate', 150)

                            # Lecture du texte à voix haute (sortie haut-parleurs)

                            # Enregistrement du texte dans un fichier audio WAV
                nom_fichier = f"_{word}.wav"
                os.chdir(os.path.join(ASSETS_DIR, "audio", "say"))
                engine.save_to_file(word, nom_fichier)
                engine.runAndWait()
                subprocess.run([ "ffmpeg", "-i", nom_fichier, "-ar", "48000", "-ac",  "2", "-c:a", "pcm_s16le", f"{word}.wav" ])
                os.remove(nom_fichier)
            self.ep_robot.play_audio(filename=f"{word}.wav").wait_for_completed()
        print("Lecture terminée.")
        return jsonify({"saying": data.get("say")})
