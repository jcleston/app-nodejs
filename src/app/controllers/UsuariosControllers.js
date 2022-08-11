// Criando lista de usuarios
let usuarios = [
    { id: 1, nome: "teste1", senha: "123" },
    { id: 2, nome: "teste2", senha: "456" },
    { id: 3, nome: "teste3", senha: "789" }
];

// Criando a classe usuarios
class UsuariosController {

    // Método para listar todos os usuarios
    index(req, res) {
        return res.json(usuarios);
    }

    // Método para recuperar um usuario
    show(req, res) {

        // Resgatando o parâmetro id do registro e transformando de string para int
        const id = parseInt(req.params.id);

        // Resgatando o usuario
        const usuario = usuarios.find(item => item.id === id);

        // Construindo o status
        const status = usuario ? 200 : 404;

        // Para debugar o resultado
        console.debug("GET :: /usuarios/:id", usuarios);

        // Retornando o status e o resultado
        return res.status(status).json(usuario);
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