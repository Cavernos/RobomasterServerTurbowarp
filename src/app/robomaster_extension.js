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
class RobomasterBasics {
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
class LedEffects {
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
class Chassis {
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
                    opcode: 'setPwmValue',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set PWM value [value]',
                    arguments: {
                        value: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
                    }
                },
                {
                    opcode: 'enableStickOverlay',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Enable stick overlay'
                },
                {
                    opcode: 'setFollowGimbalOffset',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set follow gimbal offset [offset]',
                },
                {
                    opcode: 'setTransSpeed',
                    blockType: Scratch.BlockType.COMMAND,
                    text:'Set Trans Speed [speed]',
                    arguments: {
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
                    }
                },
                {
                    opcode: 'setRotateSpeed',
                    blockType: Scratch.BlockType.COMMAND,
                    text:'Set Rotate Speed [speed]',
                    arguments: {
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
                    }
                },
                {
                    opcode: 'setWheelSpeed',
                    blockType: Scratch.BlockType.COMMAND,
                    text:'Set Wheel Speed [speed]',
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
                    opcode: 'moveWithTime',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move x: [x] y: [y] z: [z] time: [time]',
                    arguments: {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        time: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                    }
                },
                {
                    opcode: 'moveWithDistance',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move x: [x] y: [y] z: [z] distance: [distance]',
                    arguments: {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        distance: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                    }
                },
                {
                    opcode: 'moveDegreeWithSpeed',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move degree: [degree] speed: [speed]',
                    arguments: {
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 },
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
                    opcode: 'rotateWithTime',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Rotate angle: [angle] time: [time]',
                    arguments: {
                        angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 },
                        time: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                    }
                },
                {
                    opcode: 'rotateWithDegree',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Rotate angle: [angle] degree: [degree]',
                    arguments: {
                        angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 },
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
                    }
                },
                {
                    opcode: 'moveAndRotate',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move x: [x] y: [y] z: [z] speed: [speed] angle: [angle]',
                    arguments: {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 },
                        angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
                    }
                },
                {
                    opcode: 'stop',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Stop'
                },
                {
                    opcode: 'getAttitude',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get attitude'
                },
                {
                    opcode: 'getPositionBasePowerOn',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get position base power on'
                },
                {
                    opcode: 'chassisImpactDetection',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Chassis impact detection'
                },
                {
                    opcode: 'isImpact',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'Is impact'
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

    async setPwmValue(args) {
        return await this.requestHandler('setPwmValue', 'POST', args);
    }

    async enableStickOverlay() {
        return await this.requestHandler('enableStickOverlay', 'POST');
    }

    async setFollowGimbalOffset(args) {
        return await this.requestHandler('setFollowGimbalOffset', 'POST', args);
    }

    async setTransSpeed(args) {
        return await this.requestHandler('setTransSpeed', 'POST', args);
    }

    async setRotateSpeed(args) {
        return await this.requestHandler('setRotateSpeed', 'POST', args);
    }

    async setWheelSpeed(args) {
        return await this.requestHandler('setWheelSpeed', 'POST', args);
    }

    async move(args) {
        return await this.requestHandler('move', 'POST', args);
    }

    async moveWithTime(args) {
        return await this.requestHandler('moveWithTime', 'POST', args);
    }

    async moveWithDistance(args) {
        return await this.requestHandler('moveWithDistance', 'POST', args);
    }

    async moveDegreeWithSpeed(args) {
        return await this.requestHandler('moveDegreeWithSpeed', 'POST', args);
    }

    async rotate(args) {
        return await this.requestHandler('rotate', 'POST', args);
    }

    async rotateWithTime(args) {
        return await this.requestHandler('rotateWithTime', 'POST', args);
    }

    async rotateWithDegree(args) {
        return await this.requestHandler('rotateWithDegree', 'POST', args);
    }

    async moveAndRotate(args) {
        return await this.requestHandler('moveAndRotate', 'POST', args);
    }

    async stop() {
        return await this.requestHandler('stop', 'POST');
    }

    async getAttitude() {
        return await this.requestHandler('getAttitude', 'GET');
    }

    async getPositionBasePowerOn() {
        return await this.requestHandler('getPositionBasePowerOn', 'GET');
    }

    async chassisImpactDetection() {
        return await this.requestHandler('chassisImpactDetection', 'GET');
    }

    async isImpact() {
        return await this.requestHandler('isImpact', 'GET');
    }
}


// Extension Module
class ExtensionModule {
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
class Smart {
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
class Armor {
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
class Sensor {
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
class SensorAdapter {
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
class Media {
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


// Initialisation
const extensions = [
    new RobomasterBasics(),
    new LedEffects(),
    new Chassis(),
    new ExtensionModule(),
    new Smart(),
    new Armor(),
    new Sensor(),
    new SensorAdapter(),
    new Media()
  ];

extensions.forEach(extension => Scratch.extensions.register(extension));
