const fetch = require("node-fetch");

class Api {
    constructor() {
        this.basePath = "https://grumpy-insect-7.loca.lt/";
    }

    static get = async (path) => {
        const response = await fetch(this.basePath + path);
        const result = await response.json();
        return result;
    }

    static set = async (path, method, body) => {
        const response = await fetch((this.basePath + path), {
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

export default Api