import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'
export const Armor = {
    color: '#F5C343',
    blocks: [
        new Block(
            'setArmorSensitivity',
            Scratch.BlockType.COMMAND,
            'Define armor sensitivity to [sensitivity]',
            {
                sensitivity: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 5,
                },
            }
        ),
        new Block(
            'isArmorHit',
            Scratch.BlockType.EVENT,
            'When armor [armor] is hits ?',
            {
                armor: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorPosition',
                    defaultValue: language.getMessage('armorPosition')[0],
                },
            }
        ),
        new Block(
            'getLastHitArmor',
            Scratch.BlockType.REPORTER,
            '[info] of last armor hit',

            {
                info: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorInfo',
                    defaultValue: language.getMessage('armorInfo')[0],
                },
            }
        ),
        new Block(
            'waitUntilArmorHit',
            Scratch.BlockType.COMMAND,
            'Wait until armor [armor] hits ?',

            {
                armor: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armorPosition',
                    defaultValue: language.getMessage('armorPosition')[0],
                },
            }
        ),
        new Block(
            'irHit',
            Scratch.BlockType.EVENT,
            'When robot is touched by IR'
        ),
        new Block(
            'waitUntilIrHit',
            Scratch.BlockType.COMMAND,
            'Wait until robot is touched by IR'
        ),
    ],
    menus: {
        armorPosition: language.getMessage('armorPosition', [
            'random',
            'front',
            'back',
            'left',
            'right',
        ]),
        armorInfo: language.getMessage('armorInfo', ['ID', 'time']),
    },
}
