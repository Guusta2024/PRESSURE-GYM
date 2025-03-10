// backend/config/database.ts
import sequelize from '../config/database'; // Corrigido para o caminho correto

const sequelize = new Sequelize('iron pressure', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize; // Certifique-se de que está exportando como default
