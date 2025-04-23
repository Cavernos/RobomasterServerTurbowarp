// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from "#robomaster_turbowarp_extension/Block.ts";
import { language } from '#config'

export const Chassis = {
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
}