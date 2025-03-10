export class Block {

    constructor(opcode, blockType, text, serve_method = "POST", args = null) {
        this.opcode = opcode
        this.blockType = blockType
        this.text = text
        this.serve_method = serve_method
        this.arguments = args
    }
    async requestHandler(url, request_method = 'POST', request_body = null) {
        try {
            const response = await fetch(`http://localhost:8000/${url}`, {
                method: request_method,
                headers: {"Content-Type": "application/json"},
                body: (request_body) ? JSON.stringify(request_body) : {}
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