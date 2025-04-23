// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from "#robomaster_turbowarp_extension/Block.ts";
import { language } from '#config'

export const ExtensionModule = {
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
}