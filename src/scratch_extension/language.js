import {config} from "#robomaster_turbowarp_extension/config.js";

export class Language {
    constructor(lang = "en"){
        this.lang = lang
        this.translations = {}
    }
    async initialize(){
        this.translations = await this.loadTranslation()
    }
    getMessage(message){
        if (this.translations.hasOwnProperty(message)){
           return this.translations[message].message
        }
        return "NoTranslation"
    }
    async loadTranslation(){
        const response = await fetch(`http://${config.robomaster_api.host}:${config.robomaster_api.port}/${this.lang}/`,
            {headers: {"Content-Type": "application/json"}})
        return await response.json()

    }
}