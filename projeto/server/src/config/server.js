const PORT = 3200;

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./cors');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());
server.use(cors);

server.listen(PORT, () => console.log(`Servidor no ar na porta: ${PORT}`));

module.exports = server;