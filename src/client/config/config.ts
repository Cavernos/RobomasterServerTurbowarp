// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { name, version } from '#package' with { type: 'json' }
import { Language } from '#robomaster_turbowarp_extension/locales/Language.ts'
/**
 * Config module is the define variable for application configuration
 * @author Cavernos
 * @copyright Cavernos 2025/03/13
 * */

/**
 * @const {Language} language - Translator
 * @instance
 * */
// const locale: string = Scratch.vm.getLocale()
export const language = new Language()
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
        env: 'production',
        host: function () {
            if (this.env === 'production') {
                return '10.42.0.1'
            } else {
                return 'localhost'
            }
        },
        /**
         * port
         * api port like :8000
         * @type {int}
         * */
        port: function () {
            if (this.env === 'production') {
                return 443
            } else {
                return 8000
            }
        },
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
                new Block(
                    'start',
                    Scratch.BlockType.COMMAND,
                    'Start [sn]',
                    'POST',
                    {
                        sn: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'sn',
                            defaultValue: 'XF00',
                        },
                    }
                ),
                new Block('stop', Scratch.BlockType.COMMAND),
            ],
            menus: {
                sn: ['XF00'],
            },
        },
        Armor: {
            color: '#F5C343',
            blocks: [
                new Block(
                    'setArmorSensitivity',
                    Scratch.BlockType.COMMAND,
                    "définir la sensibilité de l'armure à [sensitivity]",
                    'POST',
                    {
                        sensitivity: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5,
                        },
                    }
                ),
                new Block(
                    'armorHit',
                    Scratch.BlockType.EVENT,
                    "quand l'armure [armor] est touchée",
                    'POST',
                    {
                        armor: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorPosition',
                            defaultValue: 'aléatoire',
                        },
                    }
                ),
                new Block(
                    'getLastHitArmor',
                    Scratch.BlockType.REPORTER,
                    '[info] de la dernière armure touchée',
                    'POST',
                    {
                        info: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorInfo',
                            defaultValue: 'ID',
                        },
                    }
                ),
                new Block(
                    'isArmorHit',
                    Scratch.BlockType.BOOLEAN,
                    'armure [armor] touchée',
                    'POST',
                    {
                        armor: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorPosition',
                            defaultValue: 'aléatoire',
                        },
                    }
                ),
                new Block(
                    'waitUntilArmorHit',
                    Scratch.BlockType.COMMAND,
                    "attendre un impact sur l'armure [armor]",
                    'POST',
                    {
                        armor: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'armorPosition',
                            defaultValue: 'aléatoire',
                        },
                    }
                ),
                new Block(
                    'irHit',
                    Scratch.BlockType.EVENT,
                    "Lorsqu'un robot est touché par un faisceau infrarouge",
                    'POST'
                ),
                new Block(
                    'isIrHit',
                    Scratch.BlockType.BOOLEAN,
                    'robot touché par un faisceau infrarouge',
                    'POST'
                ),
                new Block(
                    'waitUntilIrHit',
                    Scratch.BlockType.COMMAND,
                    'Attendez que le robot soit touché par un faisceau infrarouge',
                    'POST'
                ),
            ],
            menus: {
                armorPosition: [
                    'aléatoire',
                    'avant',
                    'arrière',
                    'gauche',
                    'droite',
                ],
                armorInfo: ['ID', 'temps'],
            },
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
                new Block(
                    'playNote',
                    Scratch.BlockType.COMMAND,
                    'jouer la note [note]',
                    'POST',
                    {
                        note: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'notes',
                            defaultValue: '1C',
                        },
                    }
                ),
                new Block(
                    'playSoundEffect',
                    Scratch.BlockType.COMMAND,
                    'jouer un effet sonore pour [effect]',
                    'POST',
                    {
                        effect: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'soundEffects',
                            defaultValue: 'impact',
                        },
                    }
                ),
                new Block(
                    'playSoundEffectUntilDone',
                    Scratch.BlockType.COMMAND,
                    "jouer l'effet sonore [effect] jusqu'à la fin",
                    'POST',
                    {
                        effect: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'soundEffects',
                            defaultValue: 'impact',
                        },
                    }
                ),
                new Block(
                    'playCustomAudio',
                    Scratch.BlockType.COMMAND,
                    'Lire audio personnalisé [audio]',
                    'POST',
                    {
                        audio: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'customAudio',
                            defaultValue: 'audio1',
                        },
                    }
                ),
                new Block(
                    'playCustomAudioUntilDone',
                    Scratch.BlockType.COMMAND,
                    "Lire audio personnalisé [audio] jusqu'à la fin",
                    'POST',
                    {
                        audio: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'customAudio',
                            defaultValue: 'audio1',
                        },
                    }
                ),
                new Block(
                    'takePhoto',
                    Scratch.BlockType.COMMAND,
                    'prendre une photo',
                    'POST'
                ),
                new Block(
                    'startVideoRecording',
                    Scratch.BlockType.COMMAND,
                    "[action] l'enregistrement vidéo",
                    'POST',
                    {
                        action: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'recordingActions',
                            defaultValue: 'start',
                        },
                    }
                ),
            ],
            menus: {
                notes: [
                    '1C',
                    '1D',
                    '1E',
                    '1F',
                    '1G',
                    '1A',
                    '1B',
                    '2C',
                    '2D',
                    '2E',
                    '2F',
                    '2G',
                    '2A',
                    '2B',
                    '3C',
                    '3D',
                    '3E',
                    '3F',
                    '3G',
                    '3A',
                    '3B',
                ],
                soundEffects: ['impact', 'hit', 'explosion', 'alert'],
                customAudio: ['audio1', 'audio2', 'audio3'],
                recordingActions: ['start', 'stop'],
            },
        },
        Sensor: {
            color: '#6DD700',
            blocks: [
                new Block(
                    'setInfraredSensor',
                    Scratch.BlockType.COMMAND,
                    'capteur de distance infrarouge [status] fonctions de mesures [sensor]',
                    'POST',
                    {
                        sensor: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        status: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'sensorStatus',
                            defaultValue: 'activer',
                        },
                    }
                ),
                new Block(
                    'whenInfraredDistance',
                    Scratch.BlockType.EVENT,
                    'quand le capteur de distance infrarouge [sensor] détecte une distance de [operator] [value] cm',
                    'POST',
                    {
                        sensor: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        operator: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'operators',
                            defaultValue: '>=',
                        },
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10,
                        },
                    }
                ),
                new Block(
                    'waitUntilInfraredDistance',
                    Scratch.BlockType.COMMAND,
                    'attendez que la valeur de distance [operator] [value] cm du capteur de distance infrarouge [sensor]',
                    'POST',
                    {
                        operator: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'operators',
                            defaultValue: '>=',
                        },
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10,
                        },
                        sensor: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
                new Block(
                    'isInfraredDistance',
                    Scratch.BlockType.BOOLEAN,
                    'valeur de distance [operator] [value] cm du capteur de distance infrarouge [sensor]',
                    'POST',
                    {
                        operator: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'operators',
                            defaultValue: '>=',
                        },
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10,
                        },
                        sensor: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
                new Block(
                    'getInfraredDistance',
                    Scratch.BlockType.REPORTER,
                    'capteur de distance infrarouge [sensor] valeur de distance',
                    'POST',
                    {
                        sensor: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
            ],
            menus: {
                sensorStatus: ['activer', 'désactiver'],
                operators: ['>=', '<=', '='],
            },
        },
        SensorAdapter: {
            color: '#00c87e',
            blocks: [],
        },
        Smart: {
            color: '#F19D38',
            blocks: [
                new Block(
                    'setClapsDetection',
                    Scratch.BlockType.COMMAND,
                    '[status] la détection des applaudissements',
                    'POST',
                    {
                        status: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'status',
                            defaultValue: 'activé',
                        },
                    }
                ),
                new Block(
                    'setExposureValue',
                    Scratch.BlockType.COMMAND,
                    "définir la valeur d'exposition à [exposure]",
                    'POST',
                    {
                        exposure: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'exposureValues',
                            defaultValue: 'élevée',
                        },
                    }
                ),
                new Block(
                    'whenRobotIdentifies',
                    Scratch.BlockType.EVENT,
                    'quand le robot identifie [target]',
                    'POST',
                    {
                        target: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'identificationTargets',
                            defaultValue: 'personnes',
                        },
                    }
                ),
                new Block(
                    'whenRobotIdentifiesClaps',
                    Scratch.BlockType.EVENT,
                    'quand le robot identifie [claps]',
                    'POST',
                    {
                        claps: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'clapTypes',
                            defaultValue: '2 applaudissements',
                        },
                    }
                ),
                new Block(
                    'enableIdentification',
                    Scratch.BlockType.COMMAND,
                    "[action] l'identification de [feature]",
                    'POST',
                    {
                        action: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'actionTypes',
                            defaultValue: 'activer',
                        },
                        feature: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'featureTypes',
                            defaultValue: 'marqueurs visuels',
                        },
                    }
                ),
                new Block(
                    'setMarkerIdentificationDistance',
                    Scratch.BlockType.COMMAND,
                    "définir la distance d'identification des marqueurs visuels à [distance] m",
                    'POST',
                    {
                        distance: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                ),
                new Block(
                    'setMarkerColor',
                    Scratch.BlockType.COMMAND,
                    "définir [color] comme couleur d'identification du marqueur visuel",
                    'POST',
                    {
                        color: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'markerColors',
                            defaultValue: 'rouge',
                        },
                    }
                ),
                new Block(
                    'setLineColor',
                    Scratch.BlockType.COMMAND,
                    "définir le [color] comme la couleur d'identification de la ligne",
                    'POST',
                    {
                        color: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'lineColors',
                            defaultValue: 'bleu',
                        },
                    }
                ),
                new Block(
                    'getMarkerInfo',
                    Scratch.BlockType.REPORTER,
                    'infos sur le marqueur visuel identifié',
                    'POST'
                ),
                new Block(
                    'getPersonInfo',
                    Scratch.BlockType.REPORTER,
                    'infos sur [target] identifié(e)',
                    'POST',
                    {
                        target: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'personTypes',
                            defaultValue: 'personnes',
                        },
                    }
                ),
                new Block(
                    'getGestureInfo',
                    Scratch.BlockType.REPORTER,
                    'infos sur le geste identifié',
                    'POST'
                ),
                new Block(
                    'getLineInfo',
                    Scratch.BlockType.REPORTER,
                    'infos sur la ligne identifiée',
                    'POST'
                ),
                new Block(
                    'getLinesInfo',
                    Scratch.BlockType.REPORTER,
                    'infos sur les lignes identifiées',
                    'POST'
                ),
                new Block(
                    'getCurrentBrightness',
                    Scratch.BlockType.REPORTER,
                    'luminosité actuelle',
                    'POST'
                ),
                new Block(
                    'getAimingPosition',
                    Scratch.BlockType.REPORTER,
                    'position de visée',
                    'POST'
                ),
                new Block(
                    'waitUntilIdentifies',
                    Scratch.BlockType.COMMAND,
                    "attendre jusqu'à l'identification de [target]",
                    'POST',
                    {
                        target: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'waitTargets',
                            defaultValue: 'personnes',
                        },
                    }
                ),
                new Block(
                    'waitUntilClaps',
                    Scratch.BlockType.COMMAND,
                    "attendre jusqu'à l'identification de [claps]",
                    'POST',
                    {
                        claps: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'clapTypes',
                            defaultValue: '2 applaudissements',
                        },
                    }
                ),
            ],
            menus: {
                exposureValues: ['élevée', 'moyenne', 'basse'],
                targetTypes: ['coeur rouge', 'cercle bleu', 'triangle vert'],
                identificationTargets: [
                    'personnes',
                    'marqueurs visuels',
                    'gestes',
                ],
                clapTypes: [
                    '2 applaudissements',
                    '1 applaudissement',
                    '3 applaudissements',
                ],
                actionTypes: ['activer', 'désactiver'],
                featureTypes: [
                    'marqueurs visuels',
                    'lignes',
                    'applaudissements',
                ],
                markerColors: ['rouge', 'vert', 'bleu', 'jaune'],
                lineColors: ['bleu', 'rouge', 'vert', 'jaune'],
                personTypes: ['personnes', 'robots S1'],
                waitTargets: ['personnes', 'marqueurs visuels', 'gestes'],
            },
        },
    },
}
