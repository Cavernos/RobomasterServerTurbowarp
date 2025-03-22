// @ts-nocheck
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { name, version } from '#package' with { type: 'json' }
import { Language } from '#robomaster_turbowarp_extension/locales/Language.ts'
//import { Scratch } from '#types/scratch/Scratch.d.ts'

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
        host: 'localhost',
        /**
         * port
         * api port like :8000
         * @type {int}
         * */
        port: 8000,
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
                new Block('start', Scratch.BlockType.COMMAND, '', "POST", {
                    type: Scratch.ArgumentType.STRING,
                    menu: "robotIp",
                    defaultValue: "192.168.0.2"
                }),
                new Block('stop', Scratch.BlockType.COMMAND),
            ],
            menus: {
                "robotIp": ["192.168.0.2"]
            }
        },
        Armor: {
            color: '#F5C343',
            blocks: [],
        },
        Chassis: {
            color: '#651FFF',
            blocks: [
                new Block('move', Scratch.BlockType.COMMAND, '', 'POST', {
                    x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },

                    y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },

                    z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },

                    speed: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0.5,
                    },
                }),
                new Block('rotate', Scratch.BlockType.COMMAND, '', 'POST', {
                    angle: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 90,
                    },
                }),
            ],
        },
        ExtensionModule: {
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
                        menu: 'grabberActions',
                        defaultValue: language.getMessage('grabberActions')[0],
                    },
                }),
            ],
            menus: {
                grabberActions: language.getMessage('grabberActions'),
                armPositions: language.getMessage('armPositions'),
            },
        },
        LedEffects: {
            color: '#58C0A6',
            blocks: [],
        },
        Media: {
            color: '#67AD5B',
            blocks: [
                new Block("say", Scratch.BlockType.COMMAND, "", "POST", {
                    say: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Hello"
                    }
                })
            ],
        },
        Sensor: {
            color: '#6DD700',
            blocks: [],
        },
        SensorAdapter: {
            color: '#00c87e',
            blocks: [],
        },
        Smart: {
            color: '#F19D38',
            blocks: [],
        },
    },
}
