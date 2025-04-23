// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { language } from '#config'
import { Tab } from '#robomaster_turbowarp_extension/tabs/Tab.ts'
import * as libTabs from '#robomaster_turbowarp_extension/tabs/index.ts'
import { LanguageObject } from '#types/locales/Language.d.ts'
import { Language } from '#robomaster_turbowarp_extension/locales/Language.ts'

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



/**
 * @returns {void} - Generate new message template in json file
 */

 function generate_template(): void {
    // Generate new message template in json file
    const language = new Language()
    const translations_template: LanguageObject = {}
    for (const [tabKey, tab] of Object.entries(libTabs)) {
        translations_template[tabKey] = {
            name: tabKey,
            description: 'name of tab',
            blocks: {},
            menus: {}
        }
        if (tab.blocks.length !== 0) {
            for (const block of tab.blocks) {
                translations_template[tabKey].blocks[block.opcode] = {
                    text: block.text,
                    description: 'text on block',
                }
            }
        }
        if ('menus' in tab) {
            for (const [menu_name, menu] of Object.entries(tab.menus)) {
                translations_template[tabKey].menus[menu_name] = {
                    message: menu,
                    description: 'text in menu',
                }
            }
        }
    }
    const JSONToFile = (obj: LanguageObject, filename: string): void => {
        const blob = new Blob([JSON.stringify(obj, null, 2)], {
            type: 'application/json',
        })
        const url: string = URL.createObjectURL(blob)
        const a: HTMLAnchorElement = document.createElement('a')
        a.href = url
        a.download = `${filename}.json`
        a.click()
        URL.revokeObjectURL(url)
    }
    return JSONToFile(
        translations_template,
        `messages.${language.lang}.template`
    )
}
generate_template()
