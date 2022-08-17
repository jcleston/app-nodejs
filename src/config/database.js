// Exportando as configurações
module.exports = {
  dialect: "postgres",
  host: "192.168.1.2",
  username: "caridade",
  password: "dev",
  database: "postgres",
  define: {
    timestamp: true, // Cria duas colunas: createdAt e updatedAt
    underscored: true, // nomenclatura _ (não camelCase) userGroup => user_groupe
    underscoredAll: true,
  },
};
