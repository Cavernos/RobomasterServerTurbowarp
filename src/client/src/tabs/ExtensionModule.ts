// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'

export const ExtensionModule = {
    color: '#F24A88',
    blocks: [
        new Block(
            'arm',
            Scratch.BlockType.COMMAND,
            'set arm to position [position]',
            {
                position: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armPositions',
                    defaultValue: language.getMessage('armPositions')[0],
                },
            }
        ),
        new Block('grabber', Scratch.BlockType.COMMAND, '[action] arm', {
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
            {
                action: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'gripperActions',
                    defaultValue: language.getMessage('gripperActions')[0],
                },
            }
        ),
        new Block(
            'armMove',
            Scratch.BlockType.COMMAND,
            'move arm [direction] distance:[distance]mm',

            {
                direction: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'armDirection',
                    defaultValue: language.getMessage('armDirection')[0],
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
        gripperActions: language.getMessage('gripperActions', [
            'open',
            'close',
            'stop',
        ]),
        armPositions: language.getMessage('armPositions', ['up', 'down']),
        armDirection: language.getMessage('armDirection', [
            'forward',
            'backward',
            'up',
            'bottom',
        ]),
    },
}
