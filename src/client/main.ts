// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { language } from '#config'
import { Tab } from '#robomaster_turbowarp_extension/tabs/Tab.ts'

/**
 * Extension's list
 * @const {Tab[]} extensions - Extension list
 * */
const extensions: Tab[] = []
for (const [tabKey, tab] of Object.entries(libTabs)) {
    // Create and push new tab from the extensions list given above to scratch.extention
    let tabObj: Tab
    if ('menus' in tab) {
        tabObj = new Tab(
            language.getMessage(tabKey, tabKey) as string,
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
