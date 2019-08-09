const express = require('express');
const PessoaController = require('./controllers/PessoaController');

const routes = express.Router();

routes.post('/pessoa', PessoaController.store);

module.exports = routes;