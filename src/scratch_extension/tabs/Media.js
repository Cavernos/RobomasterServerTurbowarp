export class Media {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'media',
            name: 'Media',
            color1: '#67AD5B',
            color2: '#67AD5B',
            blocks: [
            ]
        }
    }

    // -------------------- Functions -------------------- //

    async requestHandler(url, method = 'POST', body = null) {
        try {
            const options = { method, headers: { 'Content-Type': 'application/json' } };
            if (body) options.body = JSON.stringify(body);
            const response = await fetch(`http://localhost:8000/${url}`, options);
            return await response.json();
        } catch (error) {
            console.error(`Error on request ${url}:`, error);
        }
    }
}