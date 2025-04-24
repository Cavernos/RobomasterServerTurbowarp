// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'

export const LedEffects = {
    color: '#58C0A6',
    blocks: [
        new Block(
            'setFlash',
            Scratch.BlockType.COMMAND,
            'set [led] LED flash rate to [frequency]Hz',

            {
                led: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorFlash',
                    defaultValue: language.getMessage('armorFlash')[0],
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

            {
                led: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorBottomLed',
                    defaultValue: language.getMessage('armorBottomLed')[0],
                },
                color: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'color',
                    defaultValue: language.getMessage('color')[0],
                },
                effect: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'effect',
                    defaultValue: language.getMessage('effect')[0],
                },
            }
        ),
        new Block(
            'setTopLed',
            Scratch.BlockType.COMMAND,
            'set gimbal [led] LED color to [color] and effect to [effect]',

            {
                led: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorTopLed',
                    defaultValue: language.getMessage('armorTopLed')[0],
                },
                color: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'color',
                    defaultValue: language.getMessage('color')[0],
                },
                effect: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'effect',
                    defaultValue: language.getMessage('effect')[0],
                },
            }
        ),
        new Block(
            'setSignleLed',
            Scratch.BlockType.COMMAND,
            'set gimbal [led] LED sequence to [index] and effect to [effect]',

            {
                led: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorTopLed',
                    defaultValue: language.getMessage('armorTopLed')[0],
                },
                index: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
                effect: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'effect',
                    defaultValue: language.getMessage('effect')[0],
                },
            }
        ),
        new Block(
            'turnOff',
            Scratch.BlockType.COMMAND,
            'set gimbal [led] LED color to [color]',

            {
                led: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorTopLed',
                    defaultValue: language.getMessage('armorTopLed')[0],
                },
                color: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'color',
                    defaultValue: language.getMessage('color')[0],
                },
            }
        ),
    ],
    menus: {
        armorFlash: language.getMessage('armorFlash', [
            'all',
            'bottom front',
            'bottom back',
            'bottom left',
            'bottom right',
            'top left',
            'top right',
        ]),
        armorBottomLed: language.getMessage('armorBottomLed', [
            'bottom all',
            'bottom front',
            'bottom back',
            'bottom left',
            'bottom right',
        ]),
        armorTopLed: language.getMessage('armorTopLed', [
            'top all',
            'top left',
            'top right',
        ]),
        color: language.getMessage('color', [
            'red',
            'green',
            'blue',
            'yellow',
            'cyan',
            'purple',
            'white',
        ]),
        effect: language.getMessage('effect', [
            'solid',
            'breath',
            'flash',
            'off',
        ]),
    },
}
