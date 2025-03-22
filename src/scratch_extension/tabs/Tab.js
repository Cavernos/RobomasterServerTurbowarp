import * as _ from "lodash-es";

export class Tab {
    constructor(name = "NoName", color = '#000000', blocks = [], menus = {}, runtime){
        this.runtime = runtime
        this.id = `${name.substring(0, 1).toLowerCase()}${name.substring(1)}`
        this.name = name.match(/[A-Z][a-z]+/g).join(' ')
        this.color = color
        this.blocks = blocks
        this.menus = menus
         for (const block of this.blocks) {
            _.set(this, block.opcode.toString(), async () => {return await block.run()})
        }
    }
    getInfo(){
        return {
            id: this.id,
            name: this.name,
            color1: this.color,
            color2: this.color,
            blocks: this.blocks,
            menus: this.menus
        }
    }

}