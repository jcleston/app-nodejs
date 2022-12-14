// Arquivo de inicio da aplicação

// Importando o express
import express from "express";

// Importando o arquivo de rotas
import routes from "./routes";

// Importando os inits
import "./database";

// Criando a class App
class App {
  // Criando o construtor
  constructor() {
    // Adicionando a propriedade server
    this.server = express();

    // Adicionando o método middleware
    this.middlewares();

    // Adicionando o método das rotas
    this.routes();
  }

  // Criando o método middleware
  // Ele faz a camada entre o App e o express, interceptando e controlando as requisições
  middlewares() {
    // Para manipular json
    this.server.use(express.json());
  }

  // Para manipular as rotas
  routes() {
    // Para usar as rotas
    this.server.use(routes);
  }
}

// Instanciando a classe App e
// Exportando a variável server do App
export default new App().server;
