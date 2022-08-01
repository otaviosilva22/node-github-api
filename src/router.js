const {Router} = require('express');

const router = Router();

const FindRepositories = require('./controllers/FindRepositories/index.js');

const findRepositories = new FindRepositories();

router.post('/repositories', findRepositories.handle);

module.exports = {
    router
}