import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'

export const Sensor = {
    color: '#6DD700',
    blocks: [
        new Block(
            'setInfraredSensor',
            Scratch.BlockType.COMMAND,
            'IR distance captor [status] mesurement function [sensor]',

            {
                sensor: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
                status: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'sensorStatus',
                    defaultValue: language.getMessage('sensorStatus')[0],
                },
            }
        ),
        new Block(
            'whenInfraredDistance',
            Scratch.BlockType.EVENT,
            'When IR captor [sensor] distance [operator] [value] cm',

            {
                sensor: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
                operator: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'operators',
                    defaultValue: language.getMessage('operators')[0],
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
            'Wait until [operator] [value] cm with IR captor [sensor]',

            {
                operator: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'operators',
                    defaultValue: language.getMessage('operators')[0],
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
            'Distance [operator] [value] cm from IR captor [sensor]',

            {
                operator: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'operators',
                    defaultValue: language.getMessage('operators')[0],
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
            'Get IR distance [sensor] from IR captor',

            {
                sensor: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
            }
        ),
    ],
    menus: {
        sensorStatus: language.getMessage('sensorStatus', [
            'enable',
            'disable',
        ]),
        operators: language.getMessage('operators', ['>=', '<=', '=']),
    },
}
