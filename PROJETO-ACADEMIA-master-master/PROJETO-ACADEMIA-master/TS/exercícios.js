// Classe Exercicio
var Exercicio = /** @class */ (function () {
    // Construtor para inicializar os dados do exercício
    function Exercicio(nome, tipo, duracao, repeticoes, series, descricao) {
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
    Exercicio.prototype.exibirInformacoes = function () {
        console.log("Exerc\u00EDcio: ".concat(this.nome));
        console.log("Tipo: ".concat(this.tipo));
        if (this.tipo === "Cardio" && this.duracao) {
            console.log("Dura\u00E7\u00E3o: ".concat(this.duracao, " minutos"));
        }
        if (this.tipo === "Musculação" && this.repeticoes && this.series) {
            console.log("Repeti\u00E7\u00F5es: ".concat(this.repeticoes, " por s\u00E9rie"));
            console.log("S\u00E9ries: ".concat(this.series));
        }
        if (this.descricao) {
            console.log("Descri\u00E7\u00E3o: ".concat(this.descricao));
        }
    };
    return Exercicio;
}());
// Criando instâncias de exercícios
var corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
var supino = new Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");
