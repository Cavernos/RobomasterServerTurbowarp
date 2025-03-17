import en from './en/messages.json' with { type: 'json' }
import fr from './fr/messages.json' with { type: 'json' }
import { config } from '#config'
import { LanguageObject } from '#types/locales/Language.d.ts'

export class Language {
    lang: string
    available_language: { [key: string]: LanguageObject }
    translations: LanguageObject

    constructor(lang = 'en') {
        this.lang = lang
        this.available_language = {
            en,
            fr,
        }
        this.translations = this.available_language[this.lang]
    }

    getMessage(message: string): string | string[] {
        if (message in this.translations) {
            return this.translations[message].message
        }
        return 'NoTranslation'
    }
    generate_template(): void {
        const translations_template: LanguageObject = {}
        for (const [tabKey, tab] of Object.entries(config.tabs)) {
            translations_template[tabKey] = {
                message: this.getMessage(tabKey),
                description: 'name of tab',
            }
            if (tab.blocks.length !== 0) {
                for (const block of tab.blocks) {
                    translations_template[block.opcode] = {
                        message: block.text,
                        description: 'text on block',
                    }
                }
            }
            if ('menus' in tab) {
                for (const [menu_name, menu] of Object.entries(tab.menus)) {
                    translations_template[menu_name] = {
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
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${filename}.json`
            a.click()
            URL.revokeObjectURL(url)
        }
        return JSONToFile(translations_template, 'messages.template')
    }
}
