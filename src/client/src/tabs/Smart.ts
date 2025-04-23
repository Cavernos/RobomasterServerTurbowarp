// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from "#robomaster_turbowarp_extension/Block.ts";
import { language } from '#config'

export const Smart = {
    color: '#F19D38',
    blocks: [
        new Block(
            'setClapsDetection',
            Scratch.BlockType.COMMAND,
            '[status] la détection des applaudissements',
            {
                status: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'status',
                    defaultValue: 'activé',
                },
            }
        ),
        new Block(
            'setExposureValue',
            Scratch.BlockType.COMMAND,
            "définir la valeur d'exposition à [exposure]",
              
            {
                exposure: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'exposureValues',
                    defaultValue: 'élevée',
                },
            }
        ),
        new Block(
            'whenRobotIdentifies',
            Scratch.BlockType.EVENT,
            'quand le robot identifie [target]',
              
            {
                target: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'identificationTargets',
                    defaultValue: 'personnes',
                },
            }
        ),
        new Block(
            'whenRobotIdentifiesClaps',
            Scratch.BlockType.EVENT,
            'quand le robot identifie [claps]',
              
            {
                claps: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'clapTypes',
                    defaultValue: '2 applaudissements',
                },
            }
        ),
        new Block(
            'enableIdentification',
            Scratch.BlockType.COMMAND,
            "[action] l'identification de [feature]",
              
            {
                action: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'actionTypes',
                    defaultValue: 'activer',
                },
                feature: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'featureTypes',
                    defaultValue: 'marqueurs visuels',
                },
            }
        ),
        new Block(
            'setMarkerIdentificationDistance',
            Scratch.BlockType.COMMAND,
            "définir la distance d'identification des marqueurs visuels à [distance] m",
              
            {
                distance: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
            }
        ),
        new Block(
            'setMarkerColor',
            Scratch.BlockType.COMMAND,
            "définir [color] comme couleur d'identification du marqueur visuel",
              
            {
                color: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'markerColors',
                    defaultValue: 'rouge',
                },
            }
        ),
        new Block(
            'setLineColor',
            Scratch.BlockType.COMMAND,
            "définir le [color] comme la couleur d'identification de la ligne",
              
            {
                color: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'lineColors',
                    defaultValue: 'bleu',
                },
            }
        ),
        new Block(
            'getMarkerInfo',
            Scratch.BlockType.REPORTER,
            'infos sur le marqueur visuel identifié',
               
        ),
        new Block(
            'getPersonInfo',
            Scratch.BlockType.REPORTER,
            'infos sur [target] identifié(e)',
              
            {
                target: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'personTypes',
                    defaultValue: 'personnes',
                },
            }
        ),
        new Block(
            'getGestureInfo',
            Scratch.BlockType.REPORTER,
            'infos sur le geste identifié',
               
        ),
        new Block(
            'getLineInfo',
            Scratch.BlockType.REPORTER,
            'infos sur la ligne identifiée',
               
        ),
        new Block(
            'getLinesInfo',
            Scratch.BlockType.REPORTER,
            'infos sur les lignes identifiées',
               
        ),
        new Block(
            'getCurrentBrightness',
            Scratch.BlockType.REPORTER,
            'luminosité actuelle',
               
        ),
        new Block(
            'getAimingPosition',
            Scratch.BlockType.REPORTER,
            'position de visée',
               
        ),
        new Block(
            'waitUntilIdentifies',
            Scratch.BlockType.COMMAND,
            "attendre jusqu'à l'identification de [target]",
              
            {
                target: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'waitTargets',
                    defaultValue: 'personnes',
                },
            }
        ),
        new Block(
            'waitUntilClaps',
            Scratch.BlockType.COMMAND,
            "attendre jusqu'à l'identification de [claps]",
              
            {
                claps: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'clapTypes',
                    defaultValue: '2 applaudissements',
                },
            }
        ),
    ],
    menus: {
        exposureValues: ['élevée', 'moyenne', 'basse'],
        targetTypes: ['coeur rouge', 'cercle bleu', 'triangle vert'],
        identificationTargets: [
            'personnes',
            'marqueurs visuels',
            'gestes',
        ],
        clapTypes: [
            '2 applaudissements',
            '1 applaudissement',
            '3 applaudissements',
        ],
        actionTypes: ['activer', 'désactiver'],
        featureTypes: [
            'marqueurs visuels',
            'lignes',
            'applaudissements',
        ],
        markerColors: ['rouge', 'vert', 'bleu', 'jaune'],
        lineColors: ['bleu', 'rouge', 'vert', 'jaune'],
        personTypes: ['personnes', 'robots S1'],
        waitTargets: ['personnes', 'marqueurs visuels', 'gestes'],
    },
}