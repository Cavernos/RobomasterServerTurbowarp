// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from "#robomaster_turbowarp_extension/Block.ts";
import { language } from '#config'

export const Sensor = {
    color: '#6DD700',
    blocks: [
        new Block(
            'setInfraredSensor',
            Scratch.BlockType.COMMAND,
            'capteur de distance infrarouge [status] fonctions de mesures [sensor]',
              
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
    }
}