// Importando o Model
import Sequelize, { Model } from "sequelize";

// Criando a classe Customer
class Contact extends Model {
  // Criando o método de inicialização
  static init(sequelize) {
    super.init(
      {
        // Configurando
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: "customer_id" });
  }
}

export default Contact;
