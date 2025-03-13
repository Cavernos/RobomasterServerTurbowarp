// Initialisation
import {config, language} from "#robomaster_turbowarp_extension/config.js";
import {Tab} from "#robomaster_turbowarp_extension/tabs/Tab.js";


const extensions = []
for (const [tabKey, tab] of  Object.entries(config.tabs)){
        extensions.push(new Tab(language.getMessage(tabKey), tab.color, tab.blocks, tab.menus))
}
extensions.forEach(extension => Scratch.extensions.register(extension))




