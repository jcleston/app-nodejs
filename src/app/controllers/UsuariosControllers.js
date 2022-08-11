// Criando lista de usuarios
let usuarios = [
    { id: 1, nome: "teste1" },
    { id: 2, nome: "teste2" },
    { id: 3, nome: "teste3" }
];

// Criando a classe usuarios
class UsuariosController {

    // Método para listar todos os usuarios
    index(req, res) {
        return res.json(usuarios);
    }

    // Método para recuperar um usuario
    show(req, res) {

    }

    // Método para criar um usuario
    create(req, res) {

    }

    // Método para atualizar um usuario
    update(req, res) {

    }

    // Método para excluir um usuario
    delete(req, res) {

    }

}

// Exportando a classe UsuariosController
module.exports = new UsuariosController();