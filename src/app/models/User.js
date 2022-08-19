// Importando o Model
import Sequelize, { Model } from "sequelize";

// Criando a classe Customer
class User extends Model {
  // Criando o método de inicialização
  static init(sequelize) {
    super.init(
      {
        // Configurando
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
