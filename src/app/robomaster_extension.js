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
    async connection() {
        const url = 'http://localhost:8000/connection';
        try {
            const response = await fetch(url, { method: 'POST' });
            await response.json(); // Attend la réponse du serveur
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    }

    async stop() {
        const url = 'http://localhost:8000/stop';
        try {
            const response = await fetch(url, { method: 'POST' });
            await response.json();
        } catch (error) {
            console.error('Erreur lors de l’arrêt:', error);
        }
    }

    async move() {
        const url = 'http://localhost:8000/move';
        try {
            const response = await fetch(url, { method: 'POST' });
            await response.json();
        } catch (error) {
            console.error('Erreur lors du déplacement:', error);
        }
    }
}

Scratch.extensions.register(new CustomExtension());
