// Importando o router do express
const { Router } = require("express");

// Criando/Instanciando a rota
const routes = new Router();

// Importando a classe UsuariosController
const usuarios = require("./app/controllers/UsuariosControllers");

// Criando a rota index para usuarios
routes.get("/usuarios", usuarios.index);

// Exportando as rotas
module.exports = routes;