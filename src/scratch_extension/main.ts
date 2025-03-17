// Initialisation
import {config, language} from "#robomaster_turbowarp_extension/config.ts";
import {Tab} from "#robomaster_turbowarp_extension/tabs/Tab.ts";

/**
 * @const {Tab[]} extensions - Extension list
 * */
const extensions: Tab[] = []

for (const [tabKey, tab] of  Object.entries(config.tabs)){
        if ("menus" in tab){
                extensions.push(new Tab(language.getMessage(tabKey) as string, tab.color, tab.blocks, tab.menus))
        }

}
// @ts-ignore
extensions.forEach(extension => Scratch.extensions.register(extension))




