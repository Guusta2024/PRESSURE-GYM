"use strict";
class Instrutor extends Pessoa {
    // Construtor para inicializar os dados do instrutor (incluindo os dados da pessoa)
    constructor(nome, idade, sexo, formacao) {
        // Chama o construtor da classe base (Pessoa)
        super(nome, idade, sexo);
        // Inicializa a propriedade específica de Instrutor
        this.formacao = formacao;
    }
    // Método para exibir todas as informações (da Pessoa e do Instrutor)
    exibirInformacoesInstrutor() {
        this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
        console.log(`Formação: ${this.formacao}`);
    }
}
// Criando uma instância da classe Instrutor
const instrutor1 = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
// Chamando o método para exibir as informações do instrutor
instrutor1.exibirInformacoesInstrutor();
