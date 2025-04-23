// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from "#robomaster_turbowarp_extension/Block.ts";
import { language } from '#config'

export const RobomasterBasics = {
        color: '#202530',
        blocks: [
            new Block(
                'start',
                Scratch.BlockType.COMMAND,
                'Connect to robot [sn]',
                {
                    sn: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'sn',
                        defaultValue: language.getMessage('sn')[0],
                    },
                }
            ),
            new Block('stop', Scratch.BlockType.COMMAND, 'Disconnect', {}, true),
        ],
        menus: {
            sn: language.getMessage('sn'),
        },
}
