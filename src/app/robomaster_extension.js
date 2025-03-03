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
                    opcode: 'start',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Start'
                },
                {
                    opcode: 'stop',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Stop'
                },
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
                },
                {
                    opcode: 'gimbal',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move gimbal pitch: [pitch] yaw: [yaw]',
                    arguments: {
                        pitch: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        yaw: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                },
                {
                    opcode: 'arm',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move arm to [position]',
                    arguments: {
                        position: { type: Scratch.ArgumentType.STRING, menu: 'armPositions' }
                    }
                },
                {
                    opcode: 'grabber',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Grabber [action]',
                    arguments: {
                        action: { type: Scratch.ArgumentType.STRING, menu: 'grabberActions' }
                    }
                },
                {
                    opcode: 'status',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Battery level'
                }
            ],
            menus: {
                armPositions: ['up', 'down'],
                grabberActions: ['open', 'close']
            }
        };
    }

    async requestHandler(url, method = 'POST', body = null) {
        try {
            const options = { method, headers: { 'Content-Type': 'application/json' } };
            if (body) options.body = JSON.stringify(body);
            const response = await fetch(`http://localhost:8000/${url}`, options);
            return await response.json();
        } catch (error) {
            console.error(`Erreur lors de la requête ${url}:`, error);
        }
    }

    async start() {
        await this.requestHandler('start');
    }

    async stop() {
        await this.requestHandler('stop');
    }

    async move(args) {
        await this.requestHandler('move', 'POST', args);
    }

    async rotate(args) {
        await this.requestHandler('rotate', 'POST', args);
    }

    async gimbal(args) {
        await this.requestHandler('gimbal', 'POST', args);
    }

    async arm(args) {
        await this.requestHandler('arm', 'POST', args);
    }

    async grabber(args) {
        await this.requestHandler('grabber', 'POST', args);
    }

    async status() {
        const data = await this.requestHandler('status', 'GET');
        return data ? data.battery : 'Error';
    }
}

Scratch.extensions.register(new CustomExtension());
