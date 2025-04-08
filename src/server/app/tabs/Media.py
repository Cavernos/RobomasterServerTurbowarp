from lib.Tabs import Tab
from flask import jsonify, request

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
