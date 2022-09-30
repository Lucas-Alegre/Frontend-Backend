const express = require('express');
const CountryRouter = require('./midelware/Country.js');
const ActividadRouter = require('./midelware/Turista.js');
const server = express();
server.use(express.json());

// Configurar los routers
server.use('/countries', CountryRouter);
server.use('/activities', ActividadRouter);
server.get('/', async (req, res) => {
    res.send('Conectado correctamente a Home ');
});

module.exports = server;
