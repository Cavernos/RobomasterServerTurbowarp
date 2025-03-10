export class LedEffects {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'ledEffects',
            name: 'LED Effects',
            color1: '#58C0A6',
            color2: '#58C0A6',
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