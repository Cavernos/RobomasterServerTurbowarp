import { Block } from './utils/Block.js'
import { name, version } from './package.json'

export const config = {
    name: name,
    version: version,
    robomaster_api: {
        host: '127.0.0.1',
        port: 8000,
    },
    tabs: {
        RobomasterBasics: {
            color: '#202530',
            blocks: [
                new Block('start', Scratch.BlockType.COMMAND, 'Start'),
                new Block('stop', Scratch.BlockType.COMMAND, 'Stop'),
                new Block(
                    'move',
                    Scratch.BlockType.COMMAND,
                    'move x:[x], y:[y], z:[z], speed:[speed]',
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
                        z: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        speed: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    }
                ),
            ],
        },
        LedEffects: {
            color: '#58C0A6',
            blocks: [],
        },
        Chassis: {
            color: '#651FFF',
            blocks: [],
        },
        ExtensionModule: {
            color: '#F24A88',
            blocks: [],
        },
        Smart: {
            color: '#F19D38',
            blocks: [],
        },
        Armor: {
            color: '#F5C343',
            blocks: [],
        },
        Sensor: {
            color: '#6DD700',
            blocks: [],
        },
        SensorAdapter: {
            color: '#00c87e',
            blocks: [],
        },
        Media: {
            color: '#67AD5B',
            blocks: [],
        },
    },
}
