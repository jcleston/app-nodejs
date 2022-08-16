// Exportando as configurações
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "usuario_banco",
  password: "senha_banco",
  database: "nome_banco",
  define: {
    timestamp: true, // Cria duas colunas: createdAt e updatedAt
    underscored: true, // nomenclatura _ (não camelCase) userGroup => user_groupe
    underscoredAll: true,
  },
};
