const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://u_api_node:pwd_api_node@cluster0-3ixpm.mongodb.net/apinode?retryWrites=true&w=majority', {
    useNewUrlParser:true
});

server.use(express.json());
server.use(routes);

server.listen(8081);