const axios = require('axios');

const httpClient = {
    get: async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}

module.exports = httpClient;