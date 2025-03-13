import {Block} from "./utils/Block.js";
import {name, version} from "./package.json" with {type: "json"}
import {Language} from "#robomaster_turbowarp_extension/locales/language.js";
export const language = new Language()
export const config = {
    name: name,
    version: version,
    robomaster_api: {
      host: "localhost",
      port: 8000
    },
    tabs : {
         RobomasterBasics: {
             color: '#202530',
             blocks: [
                    new Block('start',  Scratch.BlockType.COMMAND),
                    new Block('stop', Scratch.BlockType.COMMAND)
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
                    "",
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
                    "",
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
                new Block('arm', Scratch.BlockType.COMMAND, '', "POST",
                    {
                            position: { type: Scratch.ArgumentType.STRING, menu: 'armPositions', defaultValue: language.getMessage("armPositions")[0] }
                        }),
                new Block( 'grabber', Scratch.BlockType.COMMAND, '', "POST",
                    {
                            action: { type: Scratch.ArgumentType.STRING, menu: 'grabberActions', defaultValue: language.getMessage("grabberActions")[0] }
                        })
            ],
            menus: {
                grabberActions: language.getMessage("grabberActions"),
                armPositions: language.getMessage("armPositions")
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
