// Importando o router do express
import { Router } from "express";

// Importando a classe UsuariosController
import usuarios from "./app/controllers/UsuariosControllers";
import customers from "./app/controllers/CustomersController";

// Criando/Instanciando a rota
const routes = new Router();

// Criando a rota index para retornar todos os usuarios
routes.get("/usuarios", usuarios.index);

// Criando a rota show para retornar um usuario
routes.get("/usuarios/:id", usuarios.show);

// Criando a rota create para criar um usuario
routes.post("/usuarios", usuarios.create);

// Criando a rota update para atualizar um usuario
routes.put("/usuarios/:id", usuarios.update);

// Criando a rota delete para excluir um usuario
routes.delete("/usuarios/:id", usuarios.delete);

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);

// Exportando as rotas
export default routes;
