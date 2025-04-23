// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from "#robomaster_turbowarp_extension/Block.ts";
import { language } from '#config'

export const LedEffects = {
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
}