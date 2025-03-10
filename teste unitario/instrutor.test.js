"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var instrutor_1 = __importDefault(require("./instrutor")); // Importa a classe Instrutor
describe('Instrutor', function () {
    var instrutor;
    beforeEach(function () {
        // Inicializa uma nova instância da classe Instrutor antes de cada teste
        instrutor = new instrutor_1.default("Carlos", 40, "Masculino", "Educação Física");
    });
    test('deve criar um instrutor com os dados corretos', function () {
        expect(instrutor.nome).toBe("Carlos");
        expect(instrutor.idade).toBe(40);
        expect(instrutor.sexo).toBe("Masculino");
        expect(instrutor.formacao).toBe("Educação Física");
    });
    test('deve exibir as informações do instrutor corretamente', function () {
        var consoleSpy = jest.spyOn(console, 'log'); // Espiona o console.log
        instrutor.exibirInformacoesInstrutor(); // Chama o método para exibir as informações do instrutor
        expect(consoleSpy).toHaveBeenCalledWith("Nome: Carlos");
        expect(consoleSpy).toHaveBeenCalledWith("Idade: 40");
        expect(consoleSpy).toHaveBeenCalledWith("Sexo: Masculino");
        expect(consoleSpy).toHaveBeenCalledWith("Formação: Educação Física");
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
});
