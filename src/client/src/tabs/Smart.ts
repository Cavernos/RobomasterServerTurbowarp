// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'

export const Smart = {
    color: '#F19D38',
    blocks: [
        new Block(
            'setClapsDetection',
            Scratch.BlockType.COMMAND,
            '[status] applause detection',
            {
                status: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'status',
                    defaultValue: language.getMessage('status')[0],
                },
            }
        ),
        new Block(
            'setExposureValue',
            Scratch.BlockType.COMMAND,
            "set exposure value to [exposure]",

            {
                exposure: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'exposureValues',
                    defaultValue: language.getMessage('exposureValues')[0],
                },
            }
        ),
        new Block(
            'whenRobotIdentifies',
            Scratch.BlockType.EVENT,
            'when [target] identified',

            {
                target: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'identificationTargets',
                    defaultValue: language.getMessage('identificationTargets')[0],
                },
            }
        ),
        new Block(
            'whenRobotIdentifiesClaps',
            Scratch.BlockType.EVENT,
            'when robot identifies [claps]',

            {
                claps: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'clapTypes',
                    defaultValue: language.getMessage("clapTypes")[0],
                },
            }
        ),
        new Block(
            'enableIdentification',
            Scratch.BlockType.COMMAND,
            "[action] identification of [feature]",

            {
                action: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'actionTypes',
                    defaultValue: language.getMessage("actionTypes")[0],
                },
                feature: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'featureTypes',
                    defaultValue: language.getMessage("featureTypes")[0],
                },
            }
        ),
        new Block(
            'setMarkerIdentificationDistance',
            Scratch.BlockType.COMMAND,
            "define visual marks distance to [distance] m",

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
            "define [color] to identification color for visual marks",

            {
                color: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'markerColors',
                    defaultValue: language.getMessage("markerColors")[0],
                },
            }
        ),
        new Block(
            'setLineColor',
            Scratch.BlockType.COMMAND,
            "define [color] to identification color of line",

            {
                color: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'lineColors',
                    defaultValue: language.getMessage("lineColors")[0],
                },
            }
        ),
        new Block(
            'getMarkerInfo',
            Scratch.BlockType.REPORTER,
            'infos about identified marks'
        ),
        new Block(
            'getPersonInfo',
            Scratch.BlockType.REPORTER,
            'infos about identified [target]',

            {
                target: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'personTypes',
                    defaultValue: language.getMessage("personTypes")[0],
                },
            }
        ),
        new Block(
            'getGestureInfo',
            Scratch.BlockType.REPORTER,
            'infos on identified gesture'
        ),
        new Block(
            'getLineInfo',
            Scratch.BlockType.REPORTER,
            'infos on identified line'
        ),
        new Block(
            'getLinesInfo',
            Scratch.BlockType.REPORTER,
            'infos on identified lines'
        ),
        new Block(
            'getCurrentBrightness',
            Scratch.BlockType.REPORTER,
            'get current brightness'
        ),
        new Block(
            'waitUntilIdentifies',
            Scratch.BlockType.COMMAND,
            "wait until identification of [target]",

            {
                target: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'waitTargets',
                    defaultValue: language.getMessage('waitTargets')[0],
                },
            }
        ),
        new Block(
            'waitUntilClaps',
            Scratch.BlockType.COMMAND,
            "wait until [claps] identification",

            {
                claps: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'clapTypes',
                    defaultValue: language.getMessage('clapTypes'),
                },
            }
        ),
    ],
    menus: {
        exposureValues: language.getMessage('exposureValues',['high', 'mean', 'low']),
        targetTypes: language.getMessage("targetTypes", ['red heart', 'blue circle', 'green triangle']),
        identificationTargets: language.getMessage('identificationTargets', ['persons', 'visual marks', 'gestures']),
        clapTypes: language.getMessage('clapTypes', [
            '1 applause',
            '2 applause',
            '3 applause',
        ]),
        actionTypes: language.getMessage('actionTypes',['activate', 'desactivate']),
        featureTypes: language.getMessage('featureTypes', ['visual marks', 'lines', 'applause']),
        markerColors: language.getMessage('markerColors', ['red', 'green', 'blue', 'yellow']),
        lineColors: language.getMessage('lineColors', ['blue', 'red', 'green', 'yellow']),
        personTypes: language.getMessage('personTypes', ['persons', 'robots S1']),
        waitTargets: language.getMessage('waitTargets', ['persons', 'visual marks', 'gestures']),
    },
}
