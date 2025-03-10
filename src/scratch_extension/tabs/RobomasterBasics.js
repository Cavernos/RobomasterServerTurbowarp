import {Block} from "../utils/Block"
import * as _ from "lodash-es"

export class RobomasterBasics {
    constructor(runtime) {
        this.runtime = runtime;
        this.blocks = [
            new Block('start',  Scratch.BlockType.COMMAND, "Start"),
            new Block('stop', Scratch.BlockType.COMMAND, "Stop")
        ]
        for (const block of this.blocks) {
            _.set(this, block.opcode.toString(), async () => {return await block.run()})
        }
    }

    getInfo() {
        return {
            id: 'robomasterBasics',
            name: 'Robomaster Basics',
            color1: '#202530',
            color2: '#202530',
            blocks: this.blocks
        }
    }
}