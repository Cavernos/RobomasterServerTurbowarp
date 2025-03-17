// Initialisation
import { config, language } from "#robomaster_turbowarp_extension/config.ts";
import { Tab } from "#robomaster_turbowarp_extension/tabs/Tab.ts";
/**
 * @const {Tab[]} extensions - Extension list
 * */
const extensions = [];
for (const [tabKey, tab] of Object.entries(config.tabs)) {
    extensions.push(new Tab(language.getMessage(tabKey), tab.color, tab.blocks, tab.menus));
}
// @ts-ignore
extensions.forEach(extension => Scratch.extensions.register(extension));
