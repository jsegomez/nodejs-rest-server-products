// Importaciones propias
const Server = require('./models/server');

// Variables de entorno
require('dotenv').config();


// Configuración de servidor de express
const server = new Server();

server.listen();