// @ts-nocheck
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { name, version } from '#package' with { type: 'json' }
import { Language } from '#robomaster_turbowarp_extension/locales/Language.ts'

//import { Scratch } from '#types/scratch/Scratch.d.ts'
/**
 * Config module is the define variable for application configuration
 * @author Cavernos
 * @copyright Cavernos 2025/03/13
 * */

/**
 * @const {Language} language - Translator
 * @instance
 * */
let locale: string = Scratch.vm.getLocale()
export const language = new Language(locale)
/**
 * Object that represent config of the app
 * @namespace config
 * */
export const config = {
    /**
     * Name of the application
     * @type {string}
     * */
    name: name,
    /**
     * Version of the application
     * @type {string}
     * */
    version: version,
    env: 'dev',
    /**
     * Robomaster Api represent host and port for fetch api connection
     * @param {string} host - api host like http://localhost/
     * @param {int} port - api port like :8000
     * @memberOf config
     * */
    robomaster_api: {
        /**
         * host
         * api host like http://localhost/
         * @type {string}
         * */
        //host: 'localhost',
        host: '',
        /**
         * port
         * api port like :8000
         * @type {int}
         * */
        port: 8000,
    },
    /**
     * Tabs
     * It's an object that contain all the tab of the app
     * @memberOf config
     * */
    tabs: {
        /**
         *  Tabs represent a
         *  tab in turbowarp
         *  @param {string} color The color of the tab
         *  @param {Block[]} blocks in the tab
         *  @param {object} menus for a tab
         *  */
        RobomasterBasics: {
            color: '#202530',
            blocks: [
                new Block('start', Scratch.BlockType.COMMAND, '', 'POST', {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'robotIp',
                    defaultValue: '192.168.0.2',
                }),
                new Block('stop', Scratch.BlockType.COMMAND),
            ],
            menus: {
                robotIp: ['192.168.0.2'],
            },
        },
        Armor: {
            color: '#F5C343',
            blocks: [],
        },
        Chassis: {
            color: '#651FFF',
            blocks: [
                new Block('move', Scratch.BlockType.COMMAND, '', 'POST', {
                    x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },

                    y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },

                    z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },

                    speed: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0.5,
                    },
                }),
                new Block('rotate', Scratch.BlockType.COMMAND, '', 'POST', {
                    angle: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 90,
                    },
                }),
                new Block(
                    'setPwmValue',
                    Scratch.BlockType.COMMAND,
                    'set [pwm] output to [value]%',
                    'POST',
                    {
                        pwm: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'pwm_port',
                            defaultValue: language.getMessage('pwm_port')[0],
                        },
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 7.5,
                        },
                    }
                ),
                new Block(
                    'enableStickOverlay',
                    Scratch.BlockType.COMMAND,
                    '[status] chassis acceleration',
                    'POST',
                    {
                        status: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'status',
                            defaultValue: language.getMessage('status')[0],
                        },
                    }
                ),
                new Block(
                    'setFollowGimbalOffset',
                    Scratch.BlockType.COMMAND,
                    'set chassis to follow gimbal at [degree]°',
                    'POST',
                    {
                        degree: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    }
                ),
                new Block(
                    'setTransSpeed',
                    Scratch.BlockType.COMMAND,
                    'set chassis translation speed to [speed]m/s',
                    'POST',
                    {
                        speed: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    }
                ),
                new Block(
                    'setRotateSpeed',
                    Scratch.BlockType.COMMAND,
                    'set chassis rotation speed to [speed]°/s',
                    'POST',
                    {
                        speed: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30,
                        },
                    }
                ),
                new Block(
                    'setWheelSpeed',
                    Scratch.BlockType.COMMAND,
                    'set wheel rotation speed (rpm) to front-left [fl] front-right [fr] rear-left [rl] rear-right [rr]',
                    'POST',
                    {
                        fl: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                        fr: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                        rl: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                        rr: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                    }
                ),
                new Block(
                    'move',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate at [degree]°',
                    'POST',
                    {
                        degree: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    }
                ),
                new Block(
                    'moveWithTime',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate at [degree]° for [time]s',
                    'POST',
                    {
                        degree: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        time: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
                new Block(
                    'moveWithDistance',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate at [degree]° for [distance]m',
                    'POST',
                    {
                        degree: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        distance: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
                new Block(
                    'moveDegreeWithSpeed',
                    Scratch.BlockType.COMMAND,
                    'set chassis to translate [degree]° at [speed]m/s',
                    'POST',
                    {
                        degree: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        speed: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0.5,
                        },
                    }
                ),
                new Block(
                    'rotate',
                    Scratch.BlockType.COMMAND,
                    'set chassis to rotate [direction]',
                    'POST',
                    {
                        direction: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'direction',
                            defaultValue: 'right',
                        },
                    }
                ),
                new Block(
                    'rotateWithTime',
                    Scratch.BlockType.COMMAND,
                    'set chassis to rotate [direction] for [time]s',
                    'POST',
                    {
                        direction: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'direction',
                            defaultValue: 'right',
                        },
                        time: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
                new Block(
                    'rotateWithDegree',
                    Scratch.BlockType.COMMAND,
                    'set chassis to rotate [direction] for [degree]°',
                    'POST',
                    {
                        direction: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'direction',
                            defaultValue: 'right',
                        },
                        degree: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    }
                ),
                new Block(
                    'moveAndRotate',
                    Scratch.BlockType.COMMAND,
                    'set robot to translate towards chassis front at [degree]° and rotate [direction]',
                    'POST',
                    {
                        degree: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        direction: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'direction',
                            defaultValue: 'right',
                        },
                    }
                ),
                new Block(
                    'moveWithSpeed',
                    Scratch.BlockType.COMMAND,
                    'set robot to translate at [xspeed]m/s along X axis and [yspeed] along Y axis and rotate along Z axis at [rotation]°/s',
                    'POST',
                    {
                        xspeed: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0.5,
                        },
                        yspeed: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0.5,
                        },
                        rotation: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30,
                        },
                    }
                ),
                new Block(
                    'stop',
                    Scratch.BlockType.COMMAND,
                    'set chassis to stop moving',
                    'POST'
                ),
                new Block(
                    'getAttitude',
                    Scratch.BlockType.REPORTER,
                    'chassis [attitude] axis attitude angle',
                    'POST',
                    {
                        attitude: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'attitude',
                            defaultValue: 'yaw',
                        },
                    }
                ),
                new Block(
                    'getPositionBasePowerOn',
                    Scratch.BlockType.REPORTER,
                    'current chassis position [action]',
                    'POST',
                    {
                        action: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'action',
                            defaultValue: 'X coordinate',
                        },
                    }
                ),
                new Block(
                    'chassisImpactDetection',
                    Scratch.BlockType.EVENT,
                    'when chassis hits an obstacle',
                    'POST'
                ),
                new Block(
                    'isImpact',
                    Scratch.BlockType.BOOLEAN,
                    'chassis hits an obstacle',
                    'POST'
                ),
            ],
            menus: {
                pwm_port: language.getMessage('pwm_port'),
                status: language.getMessage('status'),
                direction: language.getMessage('direction'),
                attitude: language.getMessage('attitude'),
                action: language.getMessage('action'),
            },
        },
        ExtensionModule: {
            color: '#F24A88',
            blocks: [
                new Block('arm', Scratch.BlockType.COMMAND, '', 'POST', {
                    position: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'armPositions',
                        defaultValue: language.getMessage('armPositions')[0],
                    },
                }),
                new Block('grabber', Scratch.BlockType.COMMAND, '', 'POST', {
                    action: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'gripperActions',
                        defaultValue: language.getMessage('gripperActions')[0],
                    },
                }),
                new Block(
                    'setGripper',
                    Scratch.BlockType.COMMAND,
                    'set gripper to [action]',
                    'POST',
                    {
                        action: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'gripperActions',
                            defaultValue:
                                language.getMessage('gripperActions')[0],
                        },
                    }
                ),
                new Block(
                    'armMove',
                    Scratch.BlockType.COMMAND,
                    'move arm [direction] distance:[distance]mm',
                    'POST',
                    {
                        direction: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armDirection',
                            defaultValue:
                                language.getMessage('armDirection')[0],
                        },
                        distance: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
                new Block(
                    'armMoveTo',
                    Scratch.BlockType.COMMAND,
                    'move arm to (X:[x] Y:[y])',
                    'POST',
                    {
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    }
                ),
            ],
            menus: {
                gripperActions: language.getMessage('gripperActions'),
                armPositions: language.getMessage('armPositions'),
                armDirection: language.getMessage('armDirection'),
            },
        },
        LedEffects: {
            color: '#58C0A6',
            blocks: [
                new Block(
                    'setFlash',
                    Scratch.BlockType.COMMAND,
                    'set [led] LED flash rate to [frequency]Hz',
                    'POST',
                    {
                        led: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorFlash',
                            defaultValue: 'all',
                        },
                        frequency: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2,
                        },
                    }
                ),
                new Block(
                    'setBottomLed',
                    Scratch.BlockType.COMMAND,
                    'set chassis [led] LED color to [color] and effect to [effect]',
                    'POST',
                    {
                        led: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorBottomLed',
                            defaultValue: 'front',
                        },
                        color: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'color',
                            defaultValue: 'blue',
                        },
                        effect: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'effect',
                            defaultValue: 'solid',
                        },
                    }
                ),
                new Block(
                    'setTopLed',
                    Scratch.BlockType.COMMAND,
                    'set gimbal [led] LED color to [color] and effect to [effect]',
                    'POST',
                    {
                        led: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorTopLed',
                            defaultValue: 'top',
                        },
                        color: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'color',
                            defaultValue: 'blue',
                        },
                        effect: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'effect',
                            defaultValue: 'solid',
                        },
                    }
                ),
                new Block(
                    'setSignleLed',
                    Scratch.BlockType.COMMAND,
                    'set gimbal [led] LED sequence to [index] and effect to [effect]',
                    'POST',
                    {
                        led: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorTopLed',
                            defaultValue: 'bottomall',
                        },
                        index: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        effect: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'effect',
                            defaultValue: 'solid',
                        },
                    }
                ),
                new Block(
                    'turnOff',
                    Scratch.BlockType.COMMAND,
                    'set gimbal [led] LED color to [color]',
                    'POST',
                    {
                        led: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorTopLed',
                            defaultValue: 'top',
                        },
                        color: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'color',
                            defaultValue: 'blue',
                        },
                    }
                ),
            ],
            menus: {
                armorFlash: [
                    'all',
                    'bottom front',
                    'bottom back',
                    'bottom left',
                    'bottom right',
                    'top left',
                    'top right',
                ],
                armorBottomLed: [
                    'bottom all',
                    'bottom front',
                    'bottom back',
                    'bottom left',
                    'bottom right',
                ],
                armorTopLed: ['top all', 'top left', 'top right'],
                color: [
                    'red',
                    'green',
                    'blue',
                    'yellow',
                    'cyan',
                    'purple',
                    'white',
                ],
                effect: ['solid', 'breath', 'flash', 'off'],
            },
        },
        Media: {
            color: '#67AD5B',
            blocks: [
                new Block('say', Scratch.BlockType.COMMAND, '', 'POST', {
                    say: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Hello',
                    },
                }),
            ],
        },
        Sensor: {
            color: '#6DD700',
            blocks: [],
        },
        SensorAdapter: {
            color: '#00c87e',
            blocks: [],
        },
        Smart: {
            color: '#F19D38',
            blocks: [],
        },
    },
}
config.env === 'production'
    ? (config.robomaster_api.host = '192.168.137.202')
    : (config.robomaster_api.host = 'localhost')
