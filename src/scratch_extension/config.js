import { Block } from "./utils/Block.js";
import { name, version } from "./package.json"

export const config = {
    name: name,
    version: version,
    robomaster_api: {
        host: "127.0.0.1",
        port: 8000
    },
    tabs: {
        RobomasterBasics: {
            color: '#202530',
            blocks: [
                new Block(
                    'start',
                    Scratch.BlockType.COMMAND,
                    "Start"
                ),
                new Block(
                    'stop',
                    Scratch.BlockType.COMMAND,
                    "Stop"
                ),
                new Block(
                    'move',
                    Scratch.BlockType.COMMAND,
                    'move x:[x], y:[y], z:[z], speed:[speed]',
                    "POST",
                    {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                ),
            ]
        },
        LedEffects: {
            color: "#58C0A6",
            blocks: [
                new Block(
                    'setFlash',
                    Scratch.BlockType.COMMAND,
                    'set [led] LED flash rate to [frequency]Hz',
                    "POST",
                    {
                        led: { type: Scratch.ArgumentType.STRING, menu: 'armorFlash', defaultValue: 'all' },
                        frequency: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
                    }
                ),
                new Block(
                    'setBottomLed',
                    Scratch.BlockType.COMMAND,
                    'set chassis [led] LED color to [color] and effect to [effect]',
                    "POST",
                    {
                        led: { type: Scratch.ArgumentType.STRING, menu: 'armorBottomLed', defaultValue: 'front' },
                        color: { type: Scratch.ArgumentType.STRING, menu: 'color', defaultValue: 'blue' },
                        effect: { type: Scratch.ArgumentType.STRING, menu: 'effect', defaultValue: 'solid' }
                    }
                ),
                new Block(
                    'setTopLed',
                    Scratch.BlockType.COMMAND,
                    'set gimbal [led] LED color to [color] and effect to [effect]',
                    "POST",
                    {
                        led: { type: Scratch.ArgumentType.STRING, menu: 'armorTopLed', defaultValue: 'top' },
                        color: { type: Scratch.ArgumentType.STRING, menu: 'color', defaultValue: 'blue' },
                        effect: { type: Scratch.ArgumentType.STRING, menu: 'effect', defaultValue: 'solid' }
                    }
                ),
                new Block(
                    'setSignleLed',
                    Scratch.BlockType.COMMAND,
                    'set gimbal [led] LED sequence to [index] and effect to [effect]',
                    "POST",
                    {
                        led: { type: Scratch.ArgumentType.STRING, menu: 'armorTopLed', defaultValue: 'bottomall' },
                        index: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        effect: { type: Scratch.ArgumentType.STRING, menu: 'effect', defaultValue: 'solid' }
                    }
                ),
                new Block(
                    'turnOff',
                    Scratch.BlockType.COMMAND,
                    'set gimbal [led] LED color to [color]',
                    "POST",
                    {
                        led: { type: Scratch.ArgumentType.STRING, menu: 'armorTopLed', defaultValue: 'top' },
                        color: { type: Scratch.ArgumentType.STRING, menu: 'color', defaultValue: 'blue' }
                    }
                ),
            ],
            menus: {
                armorFlash: ['all', 'bottom front', 'bottom back', 'bottom left', 'bottom right', 'top left', 'top right'],
                armorBottomLed: ['bottom all', 'bottom front', 'bottom back','bottom left', 'bottom right'],
                armorTopLed: ['top all', 'top left', 'top right'],
                color: ['red', 'green', 'blue', 'yellow', 'cyan', 'purple', 'white'],
                effect: ['solid', 'breath', 'flash', 'off']
            }
        },
        Chassis: {
            color: "#651FFF",
            blocks: [
                new Block(
                    'setPwmValue',
                    Scratch.BlockType.COMMAND,
                    'set [pwm] output to [value]%',
                    "POST",
                    {
                        pwm: { type: Scratch.ArgumentType.STRING, menu: 'pwn_port', defaultValue: 'PWP_all' },
                        value: { type: Scratch.ArgumentType.NUMBER, defaultValue: 7.5 }
                    }
                ),
                new Block(
                    'enableStickOverlay',
                    Scratch.BlockType.COMMAND,
                    '[status] chassis acceleration',
                    "POST",
                    {
                        status: { type: Scratch.ArgumentType.STRING, menu: 'status', defaultValue: 'Enable' },
                    }
                ),
                new Block(
                    'setFollowGimbalOffset',
                    Scratch.BlockType.COMMAND,
                    'set chassis to follow gimbal at [degree]°',
                    "POST",
                    {
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                ),
                new Block(
                    'setTransSpeed',
                    Scratch.BlockType.COMMAND,
                    'set chassis translation speed to [speed]m/s',
                    "POST",
                    {
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                ),
                new Block(
                    'setRotateSpeed',
                    Scratch.BlockType.COMMAND,
                    'set chassis rotation speed to [speed]°/s',
                    "POST",
                    {
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30 }
                    }
                ),
                new Block(
                    'setWheelSpeed',
                    Scratch.BlockType.COMMAND,
                    'set wheel rotation speed (rpm) to front-left [fl] front-right [fr] rear-left [rl] rear-right [rr]',
                    "POST",
                    {
                        fl: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
                        fr: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
                        rl: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
                        rr: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
                    }
                ),
                new Block(
                    'move',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate at [degree]°',
                    "POST",
                    {
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                    }
                ),
                new Block(
                    'moveWithTime',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate at [degree]° for [time]s',
                    "POST",
                    {
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        time: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                    }
                ),
                new Block(
                    'moveWithDistance',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate at [degree]° for [distance]m',
                    "POST",
                    {
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        distance: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                    }
                ),
                new Block(
                    'moveDegreeWithSpeed',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate [degree]° at [speed]m/s',
                    "POST",
                    {
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0},
                        speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
                    }
                ),
                new Block(
                    'rotate',
                    Scratch.BlockType.COMMAND,
                    'set chassis to rotate [direction]',
                    "POST",
                    {
                        direction: { type: Scratch.ArgumentType.STRING, menu: 'direction', defaultValue: 'right' },
                    }
                ),
                new Block(
                    'rotateWithTime',
                    Scratch.BlockType.COMMAND,
                    'set chassis to rotate [direction] for [time]s',
                    "POST",
                    {
                        direction: { type: Scratch.ArgumentType.STRING, menu: 'direction', defaultValue: 'right' },
                        time: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                    }
                ),
                new Block(
                    'rotateWithDegree',
                    Scratch.BlockType.COMMAND,
                    'set chassis to rotate [direction] for [degree]°',
                    "POST",
                    {
                        direction: { type: Scratch.ArgumentType.STRING, menu: 'direction', defaultValue: 'right' },
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                ),
                new Block(
                    'moveAndRotate',
                    Scratch.BlockType.COMMAND,
                    'set robot to translate towards chassis front at [degree]° and rotate [direction]',
                    "POST",
                    {
                        degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        direction: { type: Scratch.ArgumentType.STRING, menu: 'direction', defaultValue: 'right' }
                    }
                ),
                new Block(
                    'moveWithSpeed',
                    Scratch.BlockType.COMMAND,
                    'set robot to translate at [xspeed]m/s along X axis and [yspeed] along Y axis and rotate along Z axis at [rotation]°/s',
                    "POST",
                    {
                        xspeed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 },
                        yspeed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 },
                        rotation: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30 }
                    }
                ),
                new Block(
                    'stop',
                    Scratch.BlockType.COMMAND,
                    'set chassis to stop moving',
                    "POST"
                ),
                new Block(
                    'getAttitude',
                    Scratch.BlockType.REPORTER,
                    'chassis [attitude] axis attitude angle',
                    "POST",
                    {
                        attitude: { type: Scratch.ArgumentType.STRING, menu: 'attitude', defaultValue: 'yaw' }
                    }
                ),
                new Block(
                    'getPositionBasePowerOn',
                    Scratch.BlockType.REPORTER,
                    'current chassis position [action]',
                    "POST",
                    {
                        action: { type: Scratch.ArgumentType.STRING, menu: 'action', defaultValue: 'X coordinate' }
                    }
                ),
                new Block(
                    'chassisImpactDetection',
                    Scratch.BlockType.EVENT,
                    'when chassis hits an obstacle',
                    "POST"
                ),
                new Block(
                    'isImpact',
                    Scratch.BlockType.BOOLEAN,
                    'chassis hits an obstacle',
                    "POST",
                ),
            ],
            menus: {
                pwm_port: ['PWP_all', 'PWP_1', 'PWP_2', 'PWP_3', 'PWP_4', 'PWP_5', 'PWP_6'],
                status: ['Enable', 'Disable'],
                direction: ['right', 'left'],
                attitude: ['yaw', 'pitch', 'roll'],
                action: ['orientation', 'X coordinate', 'Y coordinate', 'Z coordinate']
            }
        },
        ExtensionModule: {
            color: "#F24A88",
            blocks: [
                new Block('setGripper',
                    Scratch.BlockType.COMMAND,
                    'set gripper to [action]',
                    "POST",
                    {
                        action: { type: Scratch.ArgumentType.STRING, menu: 'gripperActions', defaultValue: 'open' }
                    }
                ),
                new Block('armMove',
                    Scratch.BlockType.COMMAND,
                    'move arm [direction] distance:[distance]mm',
                    "POST",
                    {
                        direction: { type: Scratch.ArgumentType.STRING, menu: 'armDirection', defaultValue: 'forward' },
                        distance: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                    }
                ),
                new Block('armMoveTo',
                    Scratch.BlockType.COMMAND,
                    'move arm to (X:[x] Y:[y])',
                    "POST",
                    {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                )
            ],
            menus: {
                gripperActions: ['open', 'close', 'stop'],
                armDirection: ['forward', 'backward', 'up', 'down'],
            }
        },
        Smart: {
            color: "#F19D38",
            blocks: []
        },
        Armor: {
            color: '#F5C343',
            blocks: [
            ]
        },
        Sensor: {
            color: "#6DD700",
            blocks: []
        },
        SensorAdapter: {
            color: "#00c87e",
            blocks: []
        },
        Media: {
            color: "#67AD5B",
            blocks: []
        }
    }

}
