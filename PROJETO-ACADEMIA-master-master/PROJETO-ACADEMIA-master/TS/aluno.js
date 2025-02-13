"use strict";
class Aluno extends Pessoa {
    // Construtor para inicializar os dados do aluno (incluindo os dados da pessoa)
    constructor(nome, idade, sexo, cpf, altura, peso) {
        // Chama o construtor da classe base (Pessoa)
        super(nome, idade, sexo);
        // Inicializa as propriedades específicas de Aluno
        this.cpf = cpf;
        this.altura = altura;
        this.peso = peso;
    }
    // Método para exibir todas as informações (da Pessoa e do Aluno)
    exibirInformacoesAluno() {
        this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
        console.log(`Altura: ${this.altura}m`);
        console.log(`Peso: ${this.peso}kg`);
    }
}
// Criando uma instância da classe Aluno
const aluno1 = new Aluno("Maria", 20, "Feminino", 12367834500, 1.65, 55);
// Chamando o método para exibir as informações do aluno
aluno1.exibirInformacoesAluno();
