import en from "./en/messages.json" with {type: "json"}
import fr from "./fr/messages.json" with {type: "json"}
import {config, language} from "#robomaster_turbowarp_extension/config.js";

export class Language {
    constructor(lang = "en"){
        this.lang = lang
        this.available_language = {
            en,
            fr
        }
        this.translations = this.available_language[this.lang]
    }

    getMessage(message){
        if (this.translations.hasOwnProperty(message)){
           return this.translations[message].message
        }
        return "NoTranslation"
    }
    generate_template() {
        const translations_template = {}
             for (const [tabKey, tab] of  Object.entries(config.tabs)) {
                 translations_template[tabKey] = {message: this.getMessage(tabKey), description: "name of tab"}
                 if (tab.blocks.length !== 0) {
                     for (const block of tab.blocks) {
                         translations_template[block.opcode] = {message: block.text, description: "text on block"}
                     }
                 }
                 if (tab.hasOwnProperty('menus')){
                     for (const [menu_name, menu] of Object.entries(tab.menus)) {
                     translations_template[menu_name] = {message: menu, description: "text in menu"}

                 }
                 }

            }
            const JSONToFile = (obj, filename) => {
                  const blob = new Blob([JSON.stringify(obj, null, 2)], {
                    type: 'application/json',
                  });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${filename}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
            };
            return JSONToFile(translations_template, "messages.template")
    }
}