// Initialisation
import { config, language } from '#config'
import { Tab } from '#robomaster_turbowarp_extension/Tab.ts'
import { Scratch } from "#types/scratch/Scratch.d.ts"

/**
 * @const {Tab[]} extensions - Extension list
 * */
const extensions: Tab[] = []

for (const [tabKey, tab] of Object.entries(config.tabs)) {
    if ('menus' in tab) {
        extensions.push(
            new Tab(
                language.getMessage(tabKey) as string,
                tab.color,
                tab.blocks,
                tab.menus
            )
        )
    }
}
extensions.forEach((extension) => Scratch.extensions.register(extension))
