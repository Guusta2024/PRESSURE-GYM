import pool from './database';

export async function buscarAlunoPorLogin(login: string) {
    const [rows] = await pool.query('SELECT * FROM alunos WHERE login = ?', [login]);
    return rows; // Retorna os dados do aluno
}
