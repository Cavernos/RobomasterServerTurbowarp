class CustomExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'customExtension',
            name: 'Extension Robomaster',
            color1: '#4C97FF', // Couleur principale
            color2: '#3373CC', // Couleur secondaire
            blocks: [
                {
                    // Connection avec le robot
                    opcode: 'connection',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Connection'
                },
                {
                    // Stop la connection avec le robot
                    opcode: 'stop',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Stop'
                },
                {
                    // Avancer
                    opcode: 'move',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Avancer'
                }
            ]
        };
    }

    // Fonctions associées
    connection() {
        const url = 'http://localhost:8000/connection'; // URL du serveur Flask

        fetch(url, { method: 'POST' })  // Envoie la requête sans attendre de réponse
            .catch(error => console.error('Erreur lors de l’appel à Python:', error));
    }

    move() {
        const url = 'http://localhost:8000/move'; // URL du serveur Flask

        fetch(url, { method: 'POST' })  // Envoie la requête sans attendre de réponse
            .catch(error => console.error('Erreur lors de l’appel à Python:', error));
    }

    stop() {
        const url = 'http://localhost:8000/stop'; // URL du serveur Flask

        fetch(url, { method: 'POST' })  // Envoie la requête sans attendre de réponse
            .catch(error => console.error('Erreur lors de l’appel à Python:', error));
    }
}

Scratch.extensions.register(new CustomExtension());
