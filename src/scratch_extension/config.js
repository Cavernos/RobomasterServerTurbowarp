import {Block} from "./utils/Block.js";
import {name, version} from "./package.json"

export const config = {
    name: name,
    version: version,
    tabs : {
         RobomasterBasics: {
             color: '#202530',
             blocks: [
                    new Block('start',  Scratch.BlockType.COMMAND, "Start"),
                    new Block('stop', Scratch.BlockType.COMMAND, "Stop")
                ]
        },
        Armor : {
            color: '#F5C343',
            blocks: [
            ]
        },
        Chassis: {
             color: "#651FFF",
            blocks: [
                new Block('move',
                    Scratch.BlockType.COMMAND,
                    'Move x: [x]m y: [y]m z: [z]m speed: [speed]m/s',
                    "POST",
                     {
                            x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                            y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                            z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
                        }
                        ),
                new Block('rotate',
                     Scratch.BlockType.COMMAND,
                    'Rotate angle: [angle]°',
                    "POST",
                    {
                            angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
                    }
                    )
            ]
        },
        ExtensionModule: {
             color: "#F24A88",
            blocks: [
                new Block('arm', Scratch.BlockType.COMMAND, 'Move arm to [position]', "POST",
                    {
                            position: { type: Scratch.ArgumentType.STRING, menu: 'armPositions', defaultValue: 'up' }
                        }),
                new Block( 'grabber', Scratch.BlockType.COMMAND, 'Grabber [action]', "POST",
                    {
                            action: { type: Scratch.ArgumentType.STRING, menu: 'grabberActions', defaultValue: 'open' }
                        })
            ],
            menus: {
                grabberActions: ['open', "close"],
                armPositions: ["up", "down"]
            }
        },
        LedEffects: {
             color: "#58C0A6",
            blocks: []
        },
        Media: {
             color: "#67AD5B",
             blocks: []
        },
        Sensor: {
             color: "#6DD700",
            blocks: []
        },
        SensorAdapter: {
             color: "#00c87e",
            blocks: []
        },
        Smart: {
             color: "#F19D38",
            blocks: []
        }
    }

}
