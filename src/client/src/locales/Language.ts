import en from './en/messages.json' with { type: 'json' }
import fr from './fr/messages.json' with { type: 'json' }
import { LanguageObject } from '#types/locales/Language.d.ts'
// @ts-nocheck
/**
 * Get new language
 * @class Language
 * @exemple
 *
 */
export class Language {
    /**
     * Language's name
     * @property {string} lang
     */
    lang: string

    /**
     * List of the available language from src/locales
     * @property {string | LanguageObject } available_language
     */
    available_language: { [key: string]: LanguageObject }

    /**
     *
     * For more information about this property
     * @see {LanguageObject}
     */
    translations: LanguageObject

    /**
     * @param lang
     */
    constructor(lang = 'en') {
        // Define the properties of the class Language
        this.lang = lang
        this.available_language = {
            en,
            fr,
        }
        this.translations = this.available_language[this.lang]
    }

    /**
     *
     * @param {string[] | string} entry
     * @returns {string} the result of the translation
     */
    getMessage(entry: string): string | string[] {
        // Get the message and stranslate it, if the message is defined in src/locales
        for (const [tabKey, tab] of Object.entries(this.translations)){
            if (tabKey === entry){
                return this.translations[entry].name
            } else {
                for (const blockName of Object.keys(tab.blocks)){
                    if (blockName === entry){
                        return this.translations[tabKey].blocks[blockName].text
                    }
                }
                for (const menuName of Object.keys(tab.menus)){
                    if (menuName === entry){
                        return this.translations[tabKey].menus[menuName].message
                    }
                }
            }
        }
        return 'NoTranslation'
    }
}
