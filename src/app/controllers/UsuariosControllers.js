// Criando lista de usuarios
const usuarios = [
  { id: 1, nome: "teste1", senha: "123" },
  { id: 2, nome: "teste2", senha: "456" },
  { id: 3, nome: "teste3", senha: "789" },
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
    const usuario = usuarios.find((item) => item.id === id);

    // Construindo o status
    const status = usuario ? 200 : 404;

    // Para debugar o resultado
    console.debug("GET :: /usuarios/:id", usuarios);

    // Retornando o status e o resultado
    return res.status(status).json(usuario);
  }

  // Método para criar um usuario
  create(req, res) {
    // Recebendo os parâmetros de usuario
    const { nome, senha } = req.body;

    // Pegando o id do último registro + 1
    const id = usuarios[usuarios.length - 1].id + 1;

    // Criando novo usuario
    const newUsuario = { id, nome, senha };

    // Incluindo novo usuario
    usuarios.push(newUsuario);

    // Retornando o status e o resultado
    return res.status(201).json(newUsuario);
  }

  // Método para atualizar um usuario
  update(req, res) {
    // Resgatando o parâmetro id do registro e transformando de string para int
    const id = parseInt(req.params.id);

    // Recebendo os parâmetros de usuario
    const { nome, senha } = req.body;

    // Retornando o registro de acordo com o id
    const index = usuarios.findIndex((item) => item.id === id);

    // Verificando o status
    const status = index >= 0 ? 200 : 404;

    // Controlando a alteração
    if (index >= 0) {
      usuarios[index] = { id: parseInt(id), nome, senha };
    }

    // Retornando o resultado
    return res.status(status).json(usuarios[index]);
  }

  // Método para excluir um usuario
  delete(req, res) {
    // Resgatando o parâmetro id do registro e transformando de string para int
    const id = parseInt(req.params.id);

    // Retornando o registro de acordo com o id
    const index = usuarios.findIndex((item) => item.id === id);

    // Verificando o status
    const status = index >= 0 ? 200 : 404;

    // Controlando a alteração
    if (index >= 0) {
      usuarios.splice(index, 1);
    }

    // Retornando o resultado
    return res.status(status).json();
  }
}

// Exportando a classe UsuariosController
export default new UsuariosController();
