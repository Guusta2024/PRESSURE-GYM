// Classe Exercicio
var Exercicio = /** @class */ (function () {
    // Construtor para inicializar os dados do exercício
    function Exercicio(nome, tipo, duracao, repeticoes, series, descricao) {
        this.validarDados(nome, tipo, duracao, repeticoes, series);
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
    // Método para validar os dados do exercício
    Exercicio.prototype.validarDados = function (nome, tipo, duracao, repeticoes, series) {
        if (!nome || nome.trim() === '') {
            throw new Error("Nome do exercício não pode ser vazio.");
        }
        if (tipo !== "Cardio" && tipo !== "Musculação") {
            throw new Error("Tipo deve ser 'Cardio' ou 'Musculação'.");
        }
        if (tipo === "Cardio" && (duracao === undefined || duracao <= 0)) {
            throw new Error("Duração deve ser um número positivo para exercícios de cardio.");
        }
        if (tipo === "Musculação") {
            if (repeticoes === undefined || repeticoes <= 0) {
                throw new Error("Repetições devem ser um número positivo para exercícios de musculação.");
            }
            if (series === undefined || series <= 0) {
                throw new Error("Séries devem ser um número positivo para exercícios de musculação.");
            }
        }
    };
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
// Criando instâncias de exercícios com tratamento de erros
try {
    var corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
    corrida.exibirInformacoes();
    var supino = new Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");
    supino.exibirInformacoes();
}
catch (error) {
    console.error("Erro ao criar o exercício:", error);
}
