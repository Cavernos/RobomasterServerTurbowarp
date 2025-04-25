import { config, language } from '#config'
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
export class Block implements Scratch.AbstractBlock {
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
     * Supplementaries arguments for the block
     * For  more information on arguments
     * @see {@link Scratch.ArgumentType}
     * @property {{ [key: string]: object } | object} arguments
     */
    arguments: { [key: string]: object } | object

    /**
     * Block Terminal
     * @property {boolean | undefined}
     */
    isTerminal: boolean | undefined
    /**
     *
     * @param opcode
     * @param blockType
     * @param text
     * @param args
     * @param isTerminal
     */
    constructor(
        opcode: string,
        blockType: string,
        text: string = '',
        args?: { [key: string]: object } | object | undefined,
        isTerminal?: boolean | undefined
    ) {
        this.opcode = opcode
        this.blockType = blockType
        this.isTerminal = isTerminal ? isTerminal : false
        this.text = language.getMessage(this.opcode, text)
        this.arguments = args ? args : {}
    }

    /**
     * @param {string} url - Block api call slug
     * @param {string} request_method - If it is (POST or GET)
     * @param {undefined | object} request_body - (Arguments for the request)
     * @returns json or return error
     */
    async requestHandler(
        url: string,
        request_body: undefined | object = undefined
    ) {
        //...
        try {
            const response = await fetch(
                `http${config.robomaster_api.env === 'production' ? 's' : ''}://${config.robomaster_api.host}:${config.robomaster_api.port}/${url}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: request_body
                        ? JSON.stringify(request_body)
                        : JSON.stringify({}),
                }
            )
            const json = await response.json()
            console.log(json)
            if (config.robomaster_api.env !== 'production') {
                window.alert(JSON.stringify(json))
            }
            return json
        } catch (error) {
            window.alert(error)
            console.error(`Erreur lors de la requête ${url}:`, error)
        }
    }

    /**
     *
     */
    async run(tabName: string, args: object | undefined) {
        return await this.requestHandler(`${tabName}/${this.opcode}`, args)
    }
}
