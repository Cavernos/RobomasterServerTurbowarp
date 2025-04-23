// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from "#robomaster_turbowarp_extension/Block.ts";
import { language } from '#config'

export const Armor = {
                color: '#F5C343',
                blocks: [
                    new Block(
                        'setArmorSensitivity',
                        Scratch.BlockType.COMMAND,
                        "définir la sensibilité de l'armure à [sensitivity]",
                        'POST',
                        {
                            sensitivity: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 5,
                            },
                        }
                    ),
                    new Block(
                        'armorHit',
                        Scratch.BlockType.EVENT,
                        "quand l'armure [armor] est touchée",
                        'POST',
                        {
                            armor: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'armorPosition',
                                defaultValue: 'aléatoire',
                            },
                        }
                    ),
                    new Block(
                        'getLastHitArmor',
                        Scratch.BlockType.REPORTER,
                        '[info] de la dernière armure touchée',
                        'POST',
                        {
                            info: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'armorInfo',
                                defaultValue: 'ID',
                            },
                        }
                    ),
                    new Block(
                        'isArmorHit',
                        Scratch.BlockType.BOOLEAN,
                        'armure [armor] touchée',
                        'POST',
                        {
                            armor: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'armorPosition',
                                defaultValue: 'aléatoire',
                            },
                        }
                    ),
                    new Block(
                        'waitUntilArmorHit',
                        Scratch.BlockType.COMMAND,
                        "attendre un impact sur l'armure [armor]",
                        'POST',
                        {
                            armor: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'armorPosition',
                                defaultValue: 'aléatoire',
                            },
                        }
                    ),
                    new Block(
                        'irHit',
                        Scratch.BlockType.EVENT,
                        "Lorsqu'un robot est touché par un faisceau infrarouge",
                        'POST'
                    ),
                    new Block(
                        'isIrHit',
                        Scratch.BlockType.BOOLEAN,
                        'robot touché par un faisceau infrarouge',
                        'POST'
                    ),
                    new Block(
                        'waitUntilIrHit',
                        Scratch.BlockType.COMMAND,
                        'Attendez que le robot soit touché par un faisceau infrarouge',
                        'POST'
                    ),
                ],
                menus: {
                    armorPosition: [
                        'aléatoire',
                        'avant',
                        'arrière',
                        'gauche',
                        'droite',
                    ],
                    armorInfo: ['ID', 'temps'],
                },
}