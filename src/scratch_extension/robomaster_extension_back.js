

class CustomExtension {
    constructor(runtime) {
        this.runtime = runtime;
        this.blocks = [
            (new Block( 'start', Scratch.BlockType.COMMAND, 'Start [robots]',{
                robots: {type: Scratch.ArgumentType.STRING, menu: 'robots_ip'}
            })).toJSON(),
            (new Block('stop',  Scratch.BlockType.COMMAND,'Stop')).toJSON(),
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
        ]
    }
    getRobots(){
        return ["Aucun Robot"]
    }

    getInfo() {
        return {
            id: 'customExtension',
            name: 'Robomaster Extension',
            color1: '#4C97FF',
            color2: '#3373CC',
            blocks: this.blocks,
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
            menus: {
                armPositions: ['up', 'down'],
                grabberActions: ['open', 'close'],
                robots_ip: 'getRobots'
            }
         };
    }

    async start() {
        return await this.requestHandler('start');
    }

    async stop() {
        return await this.requestHandler('stop');
    }

    async move(args) {
        return await this.requestHandler('move', 'POST', args);
    }

    async rotate(args) {
        return await this.requestHandler('rotate', 'POST', args);
    }

    async arm(args) {
        await this.requestHandler('arm', 'POST', args);
    }

    async grabber(args) {
        await this.requestHandler('grabber', 'POST', args);
    }
}

Scratch.extensions.register(new CustomExtension());
