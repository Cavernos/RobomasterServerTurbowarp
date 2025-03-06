/*
EXTENSION CALC :
-------------------------------------------------------------------------------
// Curstom Extension
class CustomExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'customExtension',
            name: 'Custom Extension',
            color1: '#ffffff',
            color2: '#ffffff',
            blocks: [
            ]
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
}

Scratch.extensions.register(new CustomExtension());
-------------------------------------------------------------------------------
*/


// Robomaster Basics
export class RobomasterBasics {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'robomasterBasics',
            name: 'Robomaster Basics',
            color1: '#202530',
            color2: '#202530',
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
                }
            ]
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

    async start() {
        return await this.requestHandler('start');
    }

    async stop() {
        return await this.requestHandler('stop');
    }
}


// LED Effects
export class LedEffects {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'ledEffects',
            name: 'LED Effects',
            color1: '#58C0A6',
            color2: '#58C0A6',
            blocks: [
            ]
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
}


// Chassis
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


// Extension Module
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


// Smart
export class Smart {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'smart',
            name: 'Smart',
            color1: '#F19D38',
            color2: '#F19D38',
            blocks: [
            ]
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
}


// Armor
export class Armor {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'armor',
            name: 'Armor',
            color1: '#F5C343',
            color2: '#F5C343',
            blocks: [
            ]
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
}


// Sensor
export class Sensor {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'sensor',
            name: 'Sensor',
            color1: '#6DD700',
            color2: '#6DD700',
            blocks: [
            ]
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
}


// Sensor Adapter
export class SensorAdapter {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'sensorAdapter',
            name: 'Sensor Adapter',
            color1: '#00c87e',
            color2: '#00c87e',
            blocks: [
            ]
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
}


// Media
export class Media {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'media',
            name: 'Media',
            color1: '#67AD5B',
            color2: '#67AD5B',
            blocks: [
            ]
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
}



