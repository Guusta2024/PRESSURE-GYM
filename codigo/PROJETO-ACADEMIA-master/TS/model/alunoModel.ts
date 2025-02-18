import mysql from 'mysql2/promise';
export declare function getAlunos(): Promise<mysql.QueryResult>;
export declare function criarAluno(nome: string, data_nascimento: string, sexo: string, endereco: string, email: string, usuario: string, senha: string): Promise<{
    insertId: number;
}>;