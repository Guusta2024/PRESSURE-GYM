"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
describe('Classe Pessoa', function () {
    var pessoa1;
    beforeEach(function () {
        // Inicializando a instância antes de cada teste
        pessoa1 = new pessoa_1.Pessoa('João', 30, 'Masculino');
    });
    test('deve criar uma instância da classe Pessoa corretamente', function () {
        expect(pessoa1).toBeInstanceOf(pessoa_1.Pessoa);
        expect(pessoa1.nome).toBe('João');
        expect(pessoa1.idade).toBe(30);
        expect(pessoa1.sexo).toBe('Masculino');
    });
    test('deve exibir as informações corretamente', function () {
        console.log = jest.fn(); // Espiando o console.log
        pessoa1.exibirInformacoes();
        expect(console.log).toHaveBeenCalledWith('Nome: João');
        expect(console.log).toHaveBeenCalledWith('Idade: 30');
        expect(console.log).toHaveBeenCalledWith('Sexo: Masculino');
    });
    test('deve exibir as informações com dados diferentes', function () {
        pessoa1 = new pessoa_1.Pessoa('Maria', 25, 'Feminino');
        console.log = jest.fn();
        pessoa1.exibirInformacoes();
        expect(console.log).toHaveBeenCalledWith('Nome: Maria');
        expect(console.log).toHaveBeenCalledWith('Idade: 25');
        expect(console.log).toHaveBeenCalledWith('Sexo: Feminino');
    });
});
