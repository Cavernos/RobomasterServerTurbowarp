/**
 * This namespace is defined for typescript Scratch integration
 * @namespace Scratch
 * */
export namespace Scratch {
    /**
     * BlockType enum to describe all the block type we can use
     * @memberOf Scratch
     * @enum BlockType
     * @property {string} LABEL "label"
     * @property {string} XML "xml"
     * @property {string} BOOLEAN "Boolean"
     * @property {string} BUTTON 'button'
     * @property {string} COMMAND 'command'
     * @property {string} CONDITIONAL 'conditional'
     * @property {string} EVENT 'event'
     * @property {string} HAT 'hat'
     * @property {string} LOOP 'loop'
     * @property {string} REPORTER 'reporter'
     * */
    enum BlockType {
        LABEL = 'label',
        XML = 'xml',
        BOOLEAN = 'Boolean',
        BUTTON = 'button',
        COMMAND = 'command',
        CONDITIONAL = 'conditional',
        EVENT = 'event',
        HAT = 'hat',
        LOOP = 'loop',
        REPORTER = 'reporter',
    }

    /**
     * ArgumentType enum to describe all the argument type we can use for param
     * @memberOf Scratch
     * @enum ArgumentType
     * @property {string} SOUND "sound"
     * @property {string} COSTUME "costume"
     * @property {string} ANGLE "angle"
     * @property {string} BOOLEAN 'Boolean'
     * @property {string} COLOR 'color'
     * @property {string} IMAGE 'image'
     * @property {string} MATRIX 'matrix'
     * @property {string} NOTE 'note'
     * @property {string} NUMBER 'number'
     * @property {string} STRING 'string'
     * */
    enum ArgumentType {
        SOUND = 'sound',
        COSTUME = 'costume',
        ANGLE = 'angle',
        BOOLEAN = 'Boolean',
        COLOR = 'color',
        IMAGE = 'image',
        MATRIX = 'matrix',
        NOTE = 'note',
        NUMBER = 'number',
        STRING = 'string',
    }
    /**
     * Interface Extension to define Extension tabs
     * @memberOf Scratch
     * @interface
     * */
    export interface Extension {
        /**
         * @method Extension#getInfo - getInfoFunction
         * @returns {void}
         * */
        getInfo()
    }

    /**
     * @memberOf Scratch
     * @namespace Scratch.extensions
     * */
    namespace extensions {
        /**
         * @function register
         * @param {Extension} extensionObject - An extension or tab object
         * @memberOf Scratch.extensions
         * @returns {void}
         * */
        function register(extensionObject: Extension): void
        /**
         * @memberOf Scratch.extensions
         * @const {undefined | boolean} unsandboxed - If the extension is unsandboxed or not
         * */
        const unsandboxed: undefined | boolean = undefined
    }
}
