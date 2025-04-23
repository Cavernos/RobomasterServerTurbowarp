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
            'jouer la note [note]',

            {
                note: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'notes',
                    defaultValue: '1C',
                },
            }
        ),
        new Block(
            'playSoundEffect',
            Scratch.BlockType.COMMAND,
            'jouer un effet sonore pour [effect]',

            {
                effect: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'soundEffects',
                    defaultValue: 'impact',
                },
            }
        ),
        new Block(
            'playSoundEffectUntilDone',
            Scratch.BlockType.COMMAND,
            "jouer l'effet sonore [effect] jusqu'à la fin",

            {
                effect: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'soundEffects',
                    defaultValue: 'impact',
                },
            }
        ),
        new Block(
            'playCustomAudio',
            Scratch.BlockType.COMMAND,
            'Lire audio personnalisé [audio]',

            {
                audio: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'customAudio',
                    defaultValue: 'audio1',
                },
            }
        ),
        new Block(
            'playCustomAudioUntilDone',
            Scratch.BlockType.COMMAND,
            "Lire audio personnalisé [audio] jusqu'à la fin",

            {
                audio: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'customAudio',
                    defaultValue: 'audio1',
                },
            }
        ),
        new Block('takePhoto', Scratch.BlockType.COMMAND, 'prendre une photo'),
        new Block(
            'startVideoRecording',
            Scratch.BlockType.COMMAND,
            "[action] l'enregistrement vidéo",

            {
                action: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'recordingActions',
                    defaultValue: 'start',
                },
            }
        ),
    ],
    menus: {
        notes: [
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
        ],
        soundEffects: ['impact', 'hit', 'explosion', 'alert'],
        customAudio: ['audio1', 'audio2', 'audio3'],
        recordingActions: ['start', 'stop'],
    },
}
