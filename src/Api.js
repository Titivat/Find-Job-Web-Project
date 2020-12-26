const fetch = require("node-fetch");

class Api {
    constructor() {
<<<<<<< HEAD
        this.basePath = "https://horrible-turkey-61.loca.lt/api/";
=======
        this.basePath = "https://grumpy-insect-7.loca.lt/";
>>>>>>> 703e1a00a5ceb2d59533cb673965978af54fc9af
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