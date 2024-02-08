const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url)
        return data
    },
    put: async (url, body) => { },
    post: async (url, body) => { },
    delete: async (url) => { }
}
module.exports = {
    http: httpClientPlugin
}