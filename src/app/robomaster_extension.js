class CustomExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'customExtension',
            name: 'Robomaster Extension',
            color1: '#4C97FF',
            color2: '#3373CC',
            blocks: [
                {
                    // Start the connection with the robot.
                    opcode: 'start',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Start'
                },
                {
                    // Stop the connection with the robot.
                    opcode: 'stop',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Stop'
                },
                {
                    // Move the robot with user-defined parameters.
                    opcode: 'move',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move x: [X] y: [Y] z: [Z] speed: [SPEED]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Z: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        SPEED: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0.5
                        }
                    }
                }
            ]
        };
    }

    // -------------------- Functions -------------------- //

    async start() {
        const url = 'http://localhost:8000/start';
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

    async move(args) {
        const url = 'http://localhost:8000/move';
        const data = {
            x: args.X,
            y: args.Y,
            z: args.Z,
            speed: args.SPEED
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            await response.json();
        } catch (error) {
            console.error('Erreur lors du déplacement:', error);
        }
    }
}

Scratch.extensions.register(new CustomExtension());
