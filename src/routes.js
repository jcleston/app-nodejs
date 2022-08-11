// Importando o router do express
const { Router } = require("express");

// Criando/Instanciando a rota
const routes = new Router();

// Criando a rota hello
routes.get("/", (req, res) => {
    return res.json({ message: "Hello" });
});

// Exportando as rotas
module.exports = routes;