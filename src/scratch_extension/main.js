// Initialisation
import {config} from "./config.js";
import {Tab} from "./tabs/Tab.js";
const extensions = []
for (const [tabKey, tab] of  Object.entries(config.tabs)){
    extensions.push(new Tab(tabKey, tab.color, tab.blocks, tab.menus))
}
extensions.forEach(extension => Scratch.extensions.register(extension));

