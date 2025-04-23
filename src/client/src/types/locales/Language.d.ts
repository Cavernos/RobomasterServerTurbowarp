export type LanguageObject = {
    [key: string]: { 
        name: string,
        description: string 
        blocks: {
            [key: string]: {
                text: string,
                description: string
            }
        }, 
        menus: {
            [key: string]: {
                message: string[] | string, 
                description: string
            }
        } 
    }
}
