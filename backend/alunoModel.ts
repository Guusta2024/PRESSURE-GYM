import pool from './database';

export async function buscarAlunoPorLogin(login: string) {
    try {
        const [rows] = await pool.query('SELECT * FROM alunos WHERE login = ?', [login]);
        return rows; // Retorna os dados do aluno
    } catch (error) {
        console.error('Erro ao buscar aluno por login:', error);
    }
}
