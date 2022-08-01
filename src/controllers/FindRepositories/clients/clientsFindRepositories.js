const {url, route} = require('../../../common/constants');
const axios = require('axios');

async function getRepositories(user){
    
    let config = {
        url: `${url}/${user}/${route}`,
        method: 'get'
    }

    const response = await axios(config);
    
    return response
}

module.exports = {
    getRepositories
}