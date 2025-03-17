import {Block} from "#robomaster_turbowarp_extension/utils/Block.ts";
import {name, version} from "#robomaster_turbowarp_extension/package.json" with {type: "json"}
import {Language} from "#robomaster_turbowarp_extension/locales/Language.ts";
/**
 * Config module is the define variable for application configuration
 * @author Cavernos
 * @copyright Cavernos 2025/03/13
 * */



/**
 * @const {Language} language - Translator
 * @instance
 * */
export const language = new Language()

// @ts-ignore
// @ts-ignore
/**
 * Object that represent config of the app
 * @namespace config
 * */
export const config = {
    /**
     * Name of the application
     * @type {string}
     * */
    name: name,
    /**
     * Version of the application
     * @type {string}
     * */
    version: version,
    /**
     * Robomaster Api represent host and port for fetch api connection
     * @param {string} host - api host like http://localhost/
     * @param {int} port - api port like :8000
     * @memberOf config
     * */
    robomaster_api: {
        /**
         * host
         * api host like http://localhost/
         * @type {string}
         * */
      host: "localhost",
        /**
         * port
         * api port like :8000
         * @type {int}
         * */
      port: 8000
    },
    /**
     * Tabs
     * It's an object that contain all the tab of the app
     * @memberOf config
     * */
    tabs: {
        /**
         *  Tabs represent a
         *  tab in turbowarp
         *  @param {string} color The color of the tab
         *  @param {Block[]} blocks in the tab
         *  @param {object} menus for a tab
         *  */
         RobomasterBasics: {
             color: '#202530',
             blocks: [
                 // @ts-ignore
                    new Block('start',  Scratch.BlockType.COMMAND),
                 // @ts-ignore
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
                    // @ts-ignore
                    Scratch.BlockType.COMMAND,
                    "",
                    "POST",
                     {
                            // @ts-ignore
                            x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                            // @ts-ignore
                            y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                            // @ts-ignore
                            z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                            // @ts-ignore
                            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
                        }
                        ),
                new Block('rotate',
                     // @ts-ignore
                     Scratch.BlockType.COMMAND,
                    "",
                    "POST",
                    {
                        // @ts-ignore
                            angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
                    }
                    )
            ]
        },
        ExtensionModule: {
             color: "#F24A88",
            blocks: [
                // @ts-ignore
                new Block('arm', Scratch.BlockType.COMMAND, '', "POST",
                    {
                        // @ts-ignore
                            position: { type: Scratch.ArgumentType.STRING, menu: 'armPositions', defaultValue: language.getMessage("armPositions")[0] }
                        }),
                // @ts-ignore
                new Block( 'grabber', Scratch.BlockType.COMMAND, '', "POST",
                    {
                        // @ts-ignore
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
            blocks: [],
        },
        Media: {
             color: "#67AD5B",
             blocks: [],
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
