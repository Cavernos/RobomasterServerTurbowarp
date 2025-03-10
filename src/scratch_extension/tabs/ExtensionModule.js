export class ExtensionModule {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'extensionModule',
            name: 'Extension Module',
            color1: '#F24A88',
            color2: '#F24A88',
            blocks: [
                {
                    opcode: 'arm',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move arm to [position]',
                    arguments: {
                        position: { type: Scratch.ArgumentType.STRING, menu: 'armPositions', defaultValue: 'up' }
                    }
                },
                {
                    opcode: 'grabber',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Grabber [action]',
                    arguments: {
                        action: { type: Scratch.ArgumentType.STRING, menu: 'grabberActions', defaultValue: 'open' }
                    }
                }
            ],
            menus: {
                armPositions: ['up', 'down'],
                grabberActions: ['open', 'close']
            }
        }
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

    async arm(args) {
        return await this.requestHandler('arm', 'POST', args);
    }

    async grabber(args) {
        return await this.requestHandler('grabber', 'POST', args);
    }
}