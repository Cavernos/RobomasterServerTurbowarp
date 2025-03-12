// Initialisation
import {config} from "#robomaster_turbowarp_extension/config.js";
import {Tab} from "#robomaster_turbowarp_extension/tabs/Tab.js";
import {Language} from "#robomaster_turbowarp_extension/language.js";



async function main(){
    const language = new Language("fr")
    await language.initialize()
    const extensions = []
    for (const [tabKey, tab] of  Object.entries(config.tabs)){
            extensions.push(new Tab(language.getMessage(tabKey), tab.color, tab.blocks, tab.menus))
        }
    return extensions

}
main().then(extensions => extensions.forEach(extension => Scratch.extensions.register(extension)))




