import {Block} from "../utils/Block"
import * as _ from "lodash-es"

export class RobomasterBasics {
    constructor(runtime) {
        this.runtime = runtime;
        this.blocks = [
            new Block('start',  Scratch.BlockType.COMMAND, "Start"),

        ]
        for (const block of this.blocks) {
            _.set(this, block.opcode.toString(), block.run)
            console.log(this.start)
        }
    }

    getInfo() {
        return {
            id: 'robomasterBasics',
            name: 'Robomaster Basics',
            color1: '#202530',
            color2: '#202530',
            blocks: this.blocks
            // blocks: [
            //     {
            //         opcode: 'start',
            //         blockType: Scratch.BlockType.COMMAND,
            //         text: 'Start'
            //     },
            //     {
            //         opcode: 'stop',
            //         blockType: Scratch.BlockType.COMMAND,
            //         text: 'Stop'
            //     }
            // ]
        }
    }
    // -------------------- Functions -------------------- //

    // async requestHandler(url, method = 'POST', body = null) {
    //     try {
    //         const options = { method, headers: { 'Content-Type': 'application/json' } };
    //         if (body) options.body = JSON.stringify(body);
    //         const response = await fetch(`http://localhost:8000/${url}`, options);
    //         return await response.json();
    //     } catch (error) {
    //         console.error(`Error on request ${url}:`, error);
    //     }
    // }

    // async start() {
    //     return await this.requestHandler('start');
    // }

    async stop() {
        return await this.requestHandler('stop');
    }
}