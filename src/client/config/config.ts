import { name, version } from '#package' with { type: 'json' }
import { Language } from '#robomaster_turbowarp_extension/locales/Language.ts'

/**
 * Config module is the define variable for application configuration
 * @author Cavernos
 * @copyright Cavernos 2025/03/13
 * */

/**
 * @const {Language} language - Translator
 * @instance
 * */
// const locale: string = Scratch.vm.getLocale()
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
        env: import.meta.env.MODE,
        host: import.meta.env.VITE_HOST,
        /**
         * port
         * api port like :8000
         * @type {string}
         * */
        port: import.meta.env.VITE_PORT,
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
    },
}
