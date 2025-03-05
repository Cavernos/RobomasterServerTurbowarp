class Block {
    arguments = {
        SERVE_METHOD: "GET"
    }
    constructor(opcode, blockType, text, args = null) {
        this.opcode = opcode
        this.blockType = blockType
        this.text = text
        this.arguments = args
    }
    toJSON(){
        return {
            opcode: this.opcode,
            blockType: this.blockType,
            text: this.text,
            arguments: this.arguments
        }
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
    async run(method, args){
        await this.requestHandler(this.opcode, this.arguments.SERVE_METHOD, args)
    }

}

class CustomExtension {
    constructor(runtime) {
        this.runtime = runtime;
        this.blocks = [
            (new Block( 'start', Scratch.BlockType.COMMAND, 'Start')).toJSON(),
            (new Block('stop',  Scratch.BlockType.COMMAND,'Stop')).toJSON(),
        ]
    }

    getInfo() {
        return {
            id: 'customExtension',
            name: 'Robomaster Extension',
            color1: '#4C97FF',
            color2: '#3373CC',
            blocks: this.blocks
        //         [
        //         {
        //             opcode: 'move',
        //             blockType: Scratch.BlockType.COMMAND,
        //             text: 'Move x: [x] y: [y] z: [z] speed: [speed]',
        //             arguments: {
        //                 x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
        //                 y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
        //                 z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
        //                 speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
        //             }
        //         },
        //         {
        //             opcode: 'rotate',
        //             blockType: Scratch.BlockType.COMMAND,
        //             text: 'Rotate angle: [angle]',
        //             arguments: {
        //                 angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
        //             }
        //         },
        //         {
        //             opcode: 'gimbal',
        //             blockType: Scratch.BlockType.COMMAND,
        //             text: 'Move gimbal pitch: [pitch] yaw: [yaw]',
        //             arguments: {
        //                 pitch: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
        //                 yaw: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
        //             }
        //         },
        //         {
        //             opcode: 'arm',
        //             blockType: Scratch.BlockType.COMMAND,
        //             text: 'Move arm to [position]',
        //             arguments: {
        //                 position: { type: Scratch.ArgumentType.STRING, menu: 'armPositions' }
        //             }
        //         },
        //         {
        //             opcode: 'grabber',
        //             blockType: Scratch.BlockType.COMMAND,
        //             text: 'Grabber [action]',
        //             arguments: {
        //                 action: { type: Scratch.ArgumentType.STRING, menu: 'grabberActions' }
        //             }
        //         }
        //     ],
        //     menus: {
        //         armPositions: ['up', 'down'],
        //         grabberActions: ['open', 'close']
        //     }
         };
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
}

Scratch.extensions.register(new CustomExtension());
