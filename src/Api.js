class Api {
    constructor() {
        this.basePath = "https://horrible-turkey-61.loca.lt";
    }

    get = async (path) => {
        const response = await fetch('http://localhost:8000/api/position/');
        const result = await response.json();
        return result;
    }

    set = async (path, method, body) => {
        const response = await fetch(`http://localhost:8000/api/${path}`, {
            method: method,
            body: body, // string or object
            headers: {
                'Content-Type': 'application/json'
            }
            });
        const result = await response.json(); //extract JSON from the http response
        return result;
    }
}