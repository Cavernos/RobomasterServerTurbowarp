import {config, language} from "#robomaster_turbowarp_extension/config.ts";

export class Block{
    arguments: {[key: string]: object} | undefined;
    blockType: any;
    opcode: string;
    serve_method: string;
    text: string | string[];

    constructor(opcode: string, blockType: any, text: string = "", serve_method: string = "POST", args: {} | undefined = undefined) {
        this.opcode = opcode
        this.blockType = blockType
        this.text = language.getMessage(this.opcode) === "NoTranslation" ? text : language.getMessage(this.opcode)
        this.serve_method = serve_method
        this.arguments = args
    }
    async requestHandler(url: string, request_method = 'POST', request_body: undefined | object = undefined) {
        try {
            const response = await fetch(
                `http://${config.robomaster_api.host}:${config.robomaster_api.port}/${url}`, {
                method: request_method,
                headers: {"Content-Type": "application/json"},
                body: (request_body) ? JSON.stringify(request_body) : JSON.stringify({})
            });
            const json = await response.json()
            console.log(json)
            return json;
        } catch (error) {
            console.error(`Erreur lors de la requête ${url}:`, error);
        }
    }
    async run(){
        return await this.requestHandler(this.opcode, this.serve_method, this.arguments)
    }


}