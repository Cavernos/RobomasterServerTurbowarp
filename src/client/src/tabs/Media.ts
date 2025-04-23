// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'

export const Media = {
    color: '#67AD5B',
    blocks: [
        new Block('say', Scratch.BlockType.COMMAND, '', {
            say: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello',
            },
        }),
        new Block(
            'playNote',
            Scratch.BlockType.COMMAND,
            'play note [note]',

            {
                note: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'notes',
                    defaultValue: language.getMessage('notes')[0],
                },
            }
        ),
        new Block(
            'playSoundEffect',
            Scratch.BlockType.COMMAND,
            'play sound effect [effect]',

            {
                effect: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'soundEffects',
                    defaultValue: language.getMessage("soundEffects")[0],
                },
            }
        ),
        new Block(
            'playSoundEffectUntilDone',
            Scratch.BlockType.COMMAND,
            "play sound effect [effect] until done",

            {
                effect: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'soundEffects',
                    defaultValue: language.getMessage("soundEffects")[0],
                },
            }
        ),
        new Block(
            'playCustomAudio',
            Scratch.BlockType.COMMAND,
            'play custom audio [audio]',

            {
                audio: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "file name",
                },
            }
        ),
        new Block(
            'playCustomAudioUntilDone',
            Scratch.BlockType.COMMAND,
            "play custom audio [audio] until done",

            {
                audio: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "file name",
                },
            }
        ),
        new Block('takePhoto', Scratch.BlockType.COMMAND, 
            'take a photo'
        ),
        new Block(
            'startVideoRecording',
            Scratch.BlockType.COMMAND,
            "[action] register audio",

            {
                action: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'recordingActions',
                    defaultValue: language.getMessage("recordingActions")[0],
                },
            }
        ),
    ],
    menus: {
        notes: language.getMessage('note', [
            '1C',
            '1D',
            '1E',
            '1F',
            '1G',
            '1A',
            '1B',
            '2C',
            '2D',
            '2E',
            '2F',
            '2G',
            '2A',
            '2B',
            '3C',
            '3D',
            '3E',
            '3F',
            '3G',
            '3A',
            '3B',
        ] ),
        soundEffects: language.getMessage('soundEffects', ['impact', 'hit', 'explosion', 'alert']),
        recordingActions: language.getMessage('recordingActions', ['start', 'stop'] )
    },
}
