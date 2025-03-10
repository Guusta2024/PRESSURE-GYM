"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var academia_1 = __importDefault(require("./academia")); // Importa a classe Academia
var aluno_1 = __importDefault(require("./aluno")); // Importa a classe Aluno
var instrutor_1 = __importDefault(require("./instrutor")); // Importa a classe Instrutor
var exercicios_1 = __importDefault(require("./exercicios")); // Importa a classe Exercicio
describe('Academia', function () {
    var academia;
    beforeEach(function () {
        academia = new academia_1.default(); // Inicializa uma nova instância da Academia antes de cada teste
    });
    test('deve adicionar um aluno com sucesso', function () {
        var aluno = new aluno_1.default("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
        academia.adicionarAluno(aluno);
        expect(academia['alunos']).toContain(aluno); // Verifica se o aluno foi adicionado
    });
    test('deve adicionar um instrutor com sucesso', function () {
        var instrutor = new instrutor_1.default("Carlos", 40, "Masculino", "Educação Física");
        academia.adicionarInstrutor(instrutor);
        expect(academia['instrutores']).toContain(instrutor); // Verifica se o instrutor foi adicionado
    });
    test('deve adicionar um exercício com sucesso', function () {
        var exercicio = new exercicios_1.default("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
        academia.adicionarExercicio(exercicio);
        expect(academia['exercicios']).toContain(exercicio); // Verifica se o exercício foi adicionado
    });
    test('deve exibir a lista de alunos', function () {
        var aluno = new aluno_1.default("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
        academia.adicionarAluno(aluno);
        var consoleSpy = jest.spyOn(console, 'log');
        academia.exibirAlunos();
        expect(consoleSpy).toHaveBeenCalledWith("Lista de Alunos:");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Nome: Jorjão"));
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
    test('deve exibir a lista de instrutores', function () {
        var instrutor = new instrutor_1.default("Carlos", 40, "Masculino", "Educação Física");
        academia.adicionarInstrutor(instrutor);
        var consoleSpy = jest.spyOn(console, 'log');
        academia.exibirInstrutores();
        expect(consoleSpy).toHaveBeenCalledWith("Lista de Instrutores:");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Nome: Carlos"));
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
    test('deve exibir a lista de exercícios', function () {
        var exercicio = new exercicios_1.default("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
        academia.adicionarExercicio(exercicio);
        var consoleSpy = jest.spyOn(console, 'log');
        academia.exibirExercicios();
        expect(consoleSpy).toHaveBeenCalledWith("Lista de Exercícios:");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Exercício: Corrida"));
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
});
