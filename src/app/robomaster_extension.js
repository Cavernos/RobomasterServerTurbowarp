class CustomExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'customExtension',
            name: 'Extension Robomaster',
            color1: '#4C97FF',
            blocks: [
                {
                    opcode: 'connectRobot',
                    blockType: Scratch.BlockType.COMMAND, // Bloc "action"
                    text: 'Connection au robot'
                }
            ]
        };
    }

    connectRobot() {
        const url = 'http://localhost:8000/connectRobot'; // URL du serveur Flask

        fetch(url, { method: 'POST' })  // Envoie la requête sans attendre de réponse
            .catch(error => console.error('Erreur lors de l’appel à Python:', error));
    }
}

Scratch.extensions.register(new CustomExtension());
