"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_1 = __importDefault(require("./aluno")); // Importa a classe Aluno
var instrutor_1 = __importDefault(require("./instrutor")); // Importa a classe Instrutor
var exercicios_1 = __importDefault(require("./exercicios")); // Importa a classe Exercicio
var Academia = /** @class */ (function () {
    function Academia() {
        this.alunos = []; // Inicializa a lista de alunos
        this.instrutores = []; // Inicializa a lista de instrutores
        this.exercicios = []; // Inicializa a lista de exercícios
    }
    // Método para adicionar um aluno
    Academia.prototype.adicionarAluno = function (aluno) {
        try {
            if (!(aluno instanceof aluno_1.default)) {
                throw new Error('O objeto passado não é um aluno válido.');
            }
            this.alunos.push(aluno);
            console.log("Aluno ".concat(aluno.nome, " adicionado com sucesso!"));
        }
        catch (error) {
            console.error("Erro ao adicionar aluno: ".concat(error.message));
        }
    };
    // Método para adicionar um instrutor
    Academia.prototype.adicionarInstrutor = function (instrutor) {
        try {
            if (!(instrutor instanceof instrutor_1.default)) {
                throw new Error('O objeto passado não é um instrutor válido.');
            }
            this.instrutores.push(instrutor);
            console.log("Instrutor ".concat(instrutor.nome, " adicionado com sucesso!"));
        }
        catch (error) {
            console.error("Erro ao adicionar instrutor: ".concat(error.message));
        }
    };
    // Método para adicionar um exercício
    Academia.prototype.adicionarExercicio = function (exercicio) {
        try {
            if (!(exercicio instanceof exercicios_1.default)) {
                throw new Error('O objeto passado não é um exercício válido.');
            }
            this.exercicios.push(exercicio);
            console.log("Exerc\u00EDcio ".concat(exercicio.nome, " adicionado com sucesso!"));
        }
        catch (error) {
            console.error("Erro ao adicionar exerc\u00EDcio: ".concat(error.message));
        }
    };
    // Método para exibir todos os alunos
    Academia.prototype.exibirAlunos = function () {
        console.log("Lista de Alunos:");
        if (this.alunos.length === 0) {
            console.log('Nenhum aluno cadastrado.');
            return;
        }
        this.alunos.forEach(function (aluno) { return aluno.exibirInformacoesAluno(); });
    };
    // Método para exibir todos os instrutores
    Academia.prototype.exibirInstrutores = function () {
        console.log("Lista de Instrutores:");
        if (this.instrutores.length === 0) {
            console.log('Nenhum instrutor cadastrado.');
            return;
        }
        this.instrutores.forEach(function (instrutor) { return instrutor.exibirInformacoesInstrutor(); });
    };
    // Método para exibir todos os exercícios
    Academia.prototype.exibirExercicios = function () {
        console.log("Lista de Exercícios:");
        if (this.exercicios.length === 0) {
            console.log('Nenhum exercício cadastrado.');
            return;
        }
        this.exercicios.forEach(function (exercicio) { return exercicio.exibirInformacoes(); });
    };
    return Academia;
}());
// Exemplo de uso da classe Academia com tratamento de erros
var academia = new Academia();
try {
    // Criando instâncias de Aluno, Instrutor e Exercício
    var aluno1 = new aluno_1.default("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
    academia.adicionarAluno(aluno1);
    var instrutor1 = new instrutor_1.default("Carlos", 40, "Masculino", "Educação Física");
    academia.adicionarInstrutor(instrutor1);
    var corrida = new exercicios_1.default("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
    academia.adicionarExercicio(corrida);
    var supino = new exercicios_1.default("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");
    academia.adicionarExercicio(supino);
    // Exibindo as listas de alunos, instrutores e exercícios
    academia.exibirAlunos();
    academia.exibirInstrutores();
    academia.exibirExercicios();
}
catch (error) {
    console.error("Erro: ".concat(error.message));
}
