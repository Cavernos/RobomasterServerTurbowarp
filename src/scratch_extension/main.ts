// @ts-nocheck
import { config, language } from '#config'
import { Tab } from '#robomaster_turbowarp_extension/Tab.ts'
//import { Scratch } from '#types/scratch/Scratch.d.ts'

/**
 * Extension's list
 * @const {Tab[]} extensions - Extension list
 * */
const extensions: Tab[] = []
for (const [tabKey, tab] of Object.entries(config.tabs)) {
    // Create and push new tab from the extensions list given above to scratch.extention 
    let tabObj: Tab
    if ('menus' in tab) {
        tabObj = new Tab(
            language.getMessage(tabKey) as string,
            tab.color,
            tab.blocks,
            tab.menus
        )
    } else {
        tabObj = new Tab(
            language.getMessage(tabKey) as string,
            tab.color,
            tab.blocks
        )
    }
    extensions.push(tabObj)
}


/**
 * For more information about Scratch extentions 
 * @see {Scratch.extensions}
 */
extensions.forEach((extension) => Scratch.extensions.register(extension))
