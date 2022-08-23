// Importando o Model
import Sequelize, { Model } from "sequelize";

// Criando a classe Customer
class Customer extends Model {
  // Criando o método de inicialização
  static init(sequelize) {
    super.init(
      {
        // Configurando
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        // status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Contact);
  }
}

export default Customer;
