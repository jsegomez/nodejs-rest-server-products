const express = require("express");
const cors = require("cors");
const { dbConnection } = require('../database/config.db');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    this.autPath = '/api/auth'

    // Database
    this.database();

    // Middlewares
    this.middlewares();    

    // Rutas de la aplicación
    this.routes();
  }

  async database(){
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user.routes'));
    this.app.use(this.autPath, require('../routes/auth.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
