const express = require("express");
const cors = require("cors");
const { dbConnection } = require('../database/config.db');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      autPath: '/api/auth',
      categoriesPath: '/api/categories',
      usersPath: '/api/users',
    }

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
    this.app.use(this.paths.autPath, require('../routes/auth.routes'));
    this.app.use(this.paths.categoriesPath, require('../routes/categories.routes'));
    this.app.use(this.paths.usersPath, require('../routes/user.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
