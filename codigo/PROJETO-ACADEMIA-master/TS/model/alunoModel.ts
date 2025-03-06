import mysql from 'mysql2/promise';

// Configurações do banco de dados
const dbConfig = {
    host: 'localhost', // Endereço do servidor MySQL
    user: 'root', // Usuário do banco de dados
    password: '', // Senha do banco de dados
    database: 'iron_pressure', // Nome do banco de dados
};

// Função para obter a lista de alunos
export async function getAlunos(): Promise<mysql.QueryResult> {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM alunos');
        return rows;
    } catch (error) {
        console.error('Erro ao buscar alunos:', error);
        throw new Error('Erro ao buscar alunos no banco de dados');
    } finally {
        if (connection) await connection.end(); // Fecha a conexão após o uso
    }
}

// Função para criar um novo aluno
export async function criarAluno(
    nome: string, 
    data_nascimento: string, 
    sexo: string, 
    endereco: string, 
    email: string, 
    usuario: string, 
    senha: string
): Promise<{ insertId: number }> {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO alunos (nome, data_nascimento, sexo, endereco, email, usuario, senha) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [nome, data_nascimento, sexo, endereco, email, usuario, senha]
        );
        return { insertId: (result as mysql.ResultSetHeader).insertId };
    } catch (error) {
        console.error('Erro ao criar aluno:', error);
        throw new Error('Erro ao inserir aluno no banco de dados');
    } finally {
        if (connection) await connection.end(); // Fecha a conexão após o uso
    }
}

