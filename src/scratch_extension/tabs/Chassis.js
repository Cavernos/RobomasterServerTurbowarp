export class Chassis {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'RobomasterChassisExtension',
            name: 'Chassis',
            color1: '#651FFF',
            color2: '#651FFF',
            blocks: [
                {
                    opcode: 'move',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move x: [x] y: [y] z: [z] speed: [speed]',
                    arguments: {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
                    }
                },
                {
                    opcode: 'rotate',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Rotate angle: [angle]',
                    arguments: {
                        angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
                    }
                }
            ]
        };
    }

    // -------------------- Functions -------------------- //

    async requestHandler(url, method = 'POST', body = null) {
        try {
            const options = { method, headers: { 'Content-Type': 'application/json' } };
            if (body) options.body = JSON.stringify(body);
            const response = await fetch(`http://localhost:8000/${url}`, options);
            return await response.json();
        } catch (error) {
            console.error(`Error on request ${url}:`, error);
        }
    }

    async move(args) {
        return await this.requestHandler('move', 'POST', args);
    }

    async rotate(args) {
        return await this.requestHandler('rotate', 'POST', args);
    }
}
