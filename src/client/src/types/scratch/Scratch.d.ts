declare namespace Scratch {
     // TW
  const vm: VM;
  const renderer: RenderWebGL;
  // Permission requests here always return a promise, but the security manager methods themselves
  // can return either a boolean or promise.
  function fetch(url: string, options?: RequestInit): Promise<Response>;
  function canFetch(url: string): Promise<boolean>;
  function openWindow(url: string, features?: string): Promise<Window | null>;
  function canOpenWindow(url: string): Promise<boolean>;
  function redirect(url: string): Promise<void>;
  function canRedirect(url: string): Promise<boolean>;
  function canRecordAudio(): Promise<boolean>;
  function canRecordVideo(): Promise<boolean>;
  function canReadClipboard(): Promise<boolean>;
  function canNotify(): Promise<boolean>;
  function canEmbed(): Promise<boolean>;
  function canDownload(url: string, name: string): Promise<boolean>;
  function download(url: string, name: string): Promise<void>;
  namespace Cast {
    function toNumber(value: unknown): number;
    function toString(value: unknown): string;
    function toBoolean(value: unknown): boolean;
    /**
     * @returns 0 if a == b, less than 0 if b is greater, greater than 0 if a is greater.
     * Do not compare to 1 or -1! You must always use === 0, < 0, or > 0.
     */
    function compare(a: unknown, b: unknown): number;
    /**
     * @returns all channels 0-255
     */
    function toRgbColorList(value: unknown): [number, number, number];
    /**
     * @returns all channels 0-255
     */
    function toRgbColorObject(value: unknown): {r: number, g: number, b: number, a: number};
    /**
     * note: for compatibility with a Scratch bug this returns false for tab characters ('\t')
     */
    function isWhiteSpace(value: unknown): boolean;
    function isInt(value: unknown): boolean;
    const LIST_INVALID = 'INVALID';
    const LIST_ALL = 'ALL';
    function toListIndex(index: unknown, length: number, acceptAll: false): number | 'INVALID';
    function toListIndex(index: unknown, length: number, acceptAll: true): number | 'INVALID' | 'ALL';
    function toListIndex(index: unknown, length: number, acceptAll: boolean): number | 'INVALID' | 'ALL';
  }
  type TranslatableString = string | {
    id?: string;
    default: string;
    description?: string;
  }
  function translate(string: TranslatableString, variables?: Record<string, string>): string;
  namespace translate {
    function setup(translations: Record<string, Record<string, string>>): void;
    /** Current language. May change while the project runs. Possible values: "en", "es", "it", etc. */
    let language: string;
  }
  /**
   * Only available when run in a scratch-gui environment (website, desktop app).
   * In other environments (packager), will be undefined.
   */
  namespace gui {
    /**
     * Lazily get the internal ScratchBlocks object when it becomes available. It may never be
     * available if, for example, the user never enters the editor.
     *
     * ScratchBlocks becoming available does not necessarily mean the user is in the editor due
     * to getBlocklyEagerly() also existing.
     */
    function getBlockly(): Promise<ScratchBlocks.RealBlockly>;
    /**
     * Get the internal ScratchBlocks object as soon as possible. This lets you access it even
     * if the user never enters the editor.
     *
     * This method is VERY SLOW and will cause A LOT OF CPU AND NETWORK ACTIVITY because it
     * downloads and evaluates all of scratch-blocks, a multi-megabyte JavaScript bundle.
     */
    function getBlocklyEagerly(): Promise<ScratchBlocks.RealBlockly>;
  }
  
    // Note that the 'B' in the BOOLEAN enums are capitalized in Scratch. It is not a typo in this file.

    namespace ArgumentType {
        const ANGLE: 'angle'
        const BOOLEAN: 'Boolean'
        const COLOR: 'color'
        const IMAGE: 'image'
        const MATRIX: 'matrix'
        const NOTE: 'note'
        const NUMBER: 'number'
        const STRING: 'string'
    }

    namespace BlockType {
        const BOOLEAN: 'Boolean'
        const BUTTON: 'button'
        const COMMAND: 'command'
        const CONDITIONAL: 'conditional'
        const EVENT: 'event'
        const HAT: 'hat'
        const LOOP: 'loop'
        const REPORTER: 'reporter'
    }

    namespace TargetType {
        const SPRITE: 'sprite'
        const STAGE: 'stage'
    }

    interface AngleArgument {
        type: 'angle'
        /**
         * Defaults to 0.
         */
        defaultValue?: string | number
    }
    interface BooleanArgument {
        type: 'Boolean'
    }
    interface ColorArgument {
        type: 'color'
        /**
         * Should be a hex color code. No alpha channel supported. Defaults to random color.
         */
        defaultValue?: string | number
    }
    interface NumberArgument {
        type: 'number'
        /**
         * Defaults to 0.
         */
        defaultValue?: string | number
        menu?: string
    }
    interface StringArgument {
        type: 'string'
        /**
         * Defaults to empty string.
         */
        defaultValue?: string | number
        menu?: string
    }
    interface MatrixArgument {
        type: 'matrix'
        /**
         * Should be a 25 character long string of 1s and 0s.
         * Numbers are technically accepted, but be aware that due to floating point precision, some detail may be lost.
         * Technically optional, but behaves strangely with no default value.
         */
        defaultValue?: string | number
    }
    interface NoteArgument {
        type: 'note'
        /**
         * Defaults to 0 ("C (0)")
         */
        defaultValue?: string | number
    }
    interface ImageArgument {
        type: 'image'
        dataURI: string
        /**
         * Defaults to false.
         */
        flipRTL?: boolean
    }
    type Argument =
        | AngleArgument
        | BooleanArgument
        | ColorArgument
        | NumberArgument
        | StringArgument
        | MatrixArgument
        | NoteArgument
        | ImageArgument

    interface AbstractBlock {
        text: string | string[]
        filter?: Array<'target' | 'sprite'>
    }
    interface ExecutableBlock extends AbstractBlock {
        opcode: string
        func?: string
        arguments?: Record<string, Argument>
        hideFromPalette?: boolean
        blockIconURI?: string
    }
    interface BooleanBlock extends ExecutableBlock {
        blockType: 'Boolean'
    }
    interface ButtonBlock extends AbstractBlock {
        blockType: 'button'
        func: 'MAKE_A_LIST' | 'MAKE_A_PROCEDURE' | 'MAKE_A_VARIABLE'
    }
    interface CommandBlock extends ExecutableBlock {
        blockType: 'command'
        /**
         * Defaults to false.
         */
        isTerminal?: boolean
    }
    interface ConditionalBlock extends ExecutableBlock {
        blockType: 'conditional'
        /**
         * Defaults to false.
         */
        isTerminal?: boolean
        /**
         * Defaults to 1.
         */
        branchCount?: number
    }
    interface EventBlock extends ExecutableBlock {
        blockType: 'event'
        /**
         * This must be explicitly set to false, otherwise the block will not work.
         * Event blocks cannot be edge activated. Use hat instead.
         */
        isEdgeActivated: false
        /**
         * Defaults to false.
         */
        shouldRestartExistingThreads?: boolean
    }
    interface HatBlock extends ExecutableBlock {
        blockType: 'hat'
        /**
         * Defaults to true.
         */
        isEdgeActivated?: boolean
        /**
         * Defaults to false.
         */
        shouldRestartExistingThreads?: boolean
    }
    interface ReporterBlock extends ExecutableBlock {
        blockType: 'reporter'
        /**
         * Defaults to false.
         */
        disableMonitor?: boolean
    }
    interface LoopBlock extends ExecutableBlock {
        blockType: 'loop'
        /**
         * Defaults to false.
         */
        isTerminal?: boolean
        /**
         * Defaults to 1.
         */
        branchCount?: number
    }
    type Block =
        | AbstractBlock
        | BooleanBlock
        | ButtonBlock
        | CommandBlock
        | ConditionalBlock
        | EventBlock
        | HatBlock
        | ReporterBlock
        | LoopBlock

    type Separator = '---'

    interface Menu {
        acceptReporters?: boolean
        /**
         * A list of static items in the menu, or the name of the dynamic menu function.
         */
        items:
            | Array<
                  | string
                  | {
                        text: string
                        value: string
                    }
              >
            | string
    }

    interface Info {
        id: string

        /**
         * Defaults to extension ID if not specified.
         */
        name?: string

        /**
         * Should be a hex color code.
         */
        color1?: string

        /**
         * Should be a hex color code.
         */
        color2?: string

        /**
         * Should be a hex color code.
         */
        color3?: string

        /**
         * Should be a data: URI
         */
        menuIconURI?: string

        /**
         * Should be a data: URI
         */
        blockIconURI?: string

        docsURI?: string

        blocks: (Block | Separator)[]
        menus?: Record<string, Menu | string[]>
    }
    interface Extension {
        getInfo(): Info
    }

    namespace extensions {
        function register(extensionObject: Extension): void

        /**
         * True if the extension is running unsandboxed, otherwise undefined.
         */
        const unsandboxed: undefined | boolean
    }
}
