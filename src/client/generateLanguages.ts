import * as libTabs from '#robomaster_turbowarp_extension/tabs/index.ts'
import { LanguageObject } from '#types/locales/Language.d.ts'
import { Language } from '#robomaster_turbowarp_extension/locales/Language.ts'

/**
 * @returns {void} - Generate new message template in json file
 */
function generate_template(): void {
    // Generate new message template in json file
    const language = new Language('fr')
    const translations_template: LanguageObject = {}
    for (const [tabKey, tab] of Object.entries(libTabs)) {
        translations_template[tabKey] = {
            name: language.getMessage(tabKey, tabKey) as string,
            description: 'name of tab',
            blocks: {},
            menus: {},
        }
        if (tab.blocks.length !== 0) {
            for (const block of tab.blocks) {
                translations_template[tabKey].blocks[block.opcode] = {
                    text: language.getMessage(
                        block.opcode,
                        block.text
                    ) as string,
                    description: 'text on block',
                }
            }
        }
        if ('menus' in tab) {
            for (const [menu_name, menu] of Object.entries(tab.menus)) {
                translations_template[tabKey].menus[menu_name] = {
                    message: language.getMessage(menu_name, menu),
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
