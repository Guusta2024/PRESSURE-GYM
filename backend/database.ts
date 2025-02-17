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

export default pool;
