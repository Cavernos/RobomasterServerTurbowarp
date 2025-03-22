import { config, language } from '#config'
import { Scratch } from '#types/scratch/Scratch.d.ts'
/**
 * Create a new Block
 * @class Block
 * @example
 * // create a new block
 * const block = new Block("start", Scratch.BlockType.COMMAND, "Start [x]", "POST", {
 *     x: "12"
 * });
 * For more information with BlockType
 * @see {@link Scratch.BlockType}
 *
 * */
export class Block {
    /**
     * Opcode (equivalent of id) of the block
     * @property {string} opcode
     * */
    opcode: string

    /**
     *
     * Type of the block
     *
     * For more information with BlockType
     * @see {@link Scratch.BlockType}
     *
     *@property {Scratch.BlockType} BlockType
     * */
    blockType: string

    /**
     *  Text display on block
     * @property {string | string[]} text
     * */
    text: string | string[]

    /**
     * HTTP Method of the server (GET | POST)
     * @property {string} serve_method
     * */
    serve_method: string

    /**
     * Supplementaries arguments for the block
     * For  more information on arguments
     * @see {@link Scratch.ArgumentType}
     * @property {undefined | object} arguments
     */
    arguments: { [key: string]: object } | undefined

    constructor(
        opcode: string,
        blockType: string,
        text: string = '',
        serve_method: string = 'POST',
        args: { [key: string]: object } | undefined = undefined
    ) {
        this.opcode = opcode
        this.blockType = blockType
        this.text =
            language.getMessage(this.opcode) === 'NoTranslation'
                ? text
                : language.getMessage(this.opcode)
        this.serve_method = serve_method
        this.arguments = args
    }

    /**
     * @param url
     * @param request_method
     * @param request_body
     * @returns json or return error
     */
    async requestHandler(
        url: string,
        request_method = 'POST',
        request_body: undefined | object = undefined
    ) {
        //...
        try {
            const response = await fetch(
                `http://${config.robomaster_api.host}:${config.robomaster_api.port}/${url}`,
                {
                    method: request_method,
                    headers: { 'Content-Type': 'application/json' },
                    body: request_body
                        ? JSON.stringify(request_body)
                        : JSON.stringify({}),
                }
            )
            const json = await response.json()
            console.log(json)
            return json
        } catch (error) {
            console.error(`Erreur lors de la requête ${url}:`, error)
        }
    }

    /**
     *
     */
    async run(args: object | undefined) {
        return await this.requestHandler(this.opcode, this.serve_method, args)
    }
}
