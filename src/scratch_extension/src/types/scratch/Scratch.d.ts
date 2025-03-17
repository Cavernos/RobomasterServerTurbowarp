export namespace Scratch {
    enum BlockType {
        LABEL = 'label',
        XML= 'xml',
        BOOLEAN= 'Boolean',
        BUTTON = 'button',
        COMMAND = 'command',
        CONDITIONAL = 'conditional',
        EVENT = 'event',
        HAT = 'hat',
        LOOP = 'loop',
        REPORTER = 'reporter',
        
    }


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
         STRING = 'string'
    }
    export interface Extension {
        getInfo();
    }
    namespace extensions {
        function register(extensionObject: Extension): void;
        const unsandboxed: undefined | boolean = undefined;
    }
}
