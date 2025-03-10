export class Sensor {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'sensor',
            name: 'Sensor',
            color1: '#6DD700',
            color2: '#6DD700',
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