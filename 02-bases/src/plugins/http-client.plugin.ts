const axios = require('axios');

export const httpClientPlugin = {
    get: async (url:string) => {
        const { data } = await axios.get(url)
        return data
    },
    put: async (url:string, body: any) => { },
    post: async (url:string, body: any) => { },
    delete: async (url:string) => { }
} 