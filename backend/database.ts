import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'root', // Usuário do banco de dados
  password: '', // Senha do banco de dados
  database: 'iron_pressure', // Nome do banco de dados
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Testa a conexão com o banco de dados utilizando tratamento de exceções
(async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    connection.release();
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
})();

export default pool;
