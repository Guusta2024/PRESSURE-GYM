"use strict";
// Classe Exercicio
class Exercicio {
    // Construtor para inicializar os dados do exercício
    constructor(nome, tipo, duracao, repeticoes, series, descricao) {
        this.nome = nome;
        this.tipo = tipo;
        if (tipo === "Cardio" && duracao) {
            this.duracao = duracao;
        }
        if (tipo === "Musculação" && repeticoes && series) {
            this.repeticoes = repeticoes;
            this.series = series;
        }
        this.descricao = descricao;
    }
    // Método para exibir as informações do exercício
    exibirInformacoes() {
        console.log(`Exercício: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        if (this.tipo === "Cardio" && this.duracao) {
            console.log(`Duração: ${this.duracao} minutos`);
        }
        if (this.tipo === "Musculação" && this.repeticoes && this.series) {
            console.log(`Repetições: ${this.repeticoes} por série`);
            console.log(`Séries: ${this.series}`);
        }
        if (this.descricao) {
            console.log(`Descrição: ${this.descricao}`);
        }
    }
}
// Criando instâncias de exercícios
const corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
const supino = new Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");
