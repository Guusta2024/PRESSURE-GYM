import { Model, DataTypes } from 'sequelize';
import { sequelize } from './config/database';

class Aluno extends Model {
  public id!: number;
  public nome!: string; // Mude 'name' para 'nome' se for esse o nome da coluna
  public nascimento!: Date;
  public sexo!: string;
  public peso!: number;
  public altura!: number;
  public usuario!: string;
  public senha!: string;
}

Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'alunos',
  }
);

export default Aluno;
