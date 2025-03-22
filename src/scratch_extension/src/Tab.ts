import * as _ from 'lodash-es'
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { Scratch } from '#types/scratch/Scratch.d.ts'
/**
 * Create a new tab 
 * @class Tab
 * @exemple
 * // create a new tab 
 * const tab = new Tab("01", newtab", "#000000", "start",      
 * );
 * For more information with Scratch Extention
 * @see {@link Scratch.Extension}
 * For more information with Tab see below 
 * 
 **/
export class Tab implements Scratch.Extension {
    /** 
     * ID of the tab 
     * @property {string} id
     **/
    id: string

    /**
     * Tab's name 
     * @property {string} name 
     **/
    name: string

    /**
     * Tab's color 
     * @property {string} color
     */
    color: string

    /**
     * A list of block(s) having in the tab 
     * @property {list} blocks
     */
    blocks: Block[]

    /** 
     * Define tab's menu (side bar) 
     * @property {string | string[]} menus 
     */
    menus: { [key: string]: string[] }

    constructor(
        name = 'NoName',
        color = '#000000',
        blocks: never[] | Block[] = [],
        menus = {}
    ) {
        // Define this tab properties 
        this.id = `${name.substring(0, 1).toLowerCase()}${name.substring(1)}`
        this.name = name.match(/[A-Z][a-z]+/g)!.join(' ')
        this.color = color
        this.blocks = blocks!
        this.menus = menus
        for (const block of this.blocks) {
            _.set(
                this,
                block.opcode.toString(),
                async (args?: object | undefined) => {
                    return await block.run(args)
                }
            )
        }
    }

   /**
     * Return this tab's informations
     * @return {string} id 
     * @return {string} name 
     * @return {string} color
     * @return {list} blocks
     * @return {} menus 
     */
    getInfo() {
        // get Tab's information
        return {
            id: this.id,
            name: this.name,
            color1: this.color,
            color2: this.color,
            blocks: this.blocks,
            menus: this.menus,
        }
    }
}
