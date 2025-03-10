"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercicio.test.ts
var exerc_cios_1 = require("./exerc\u00EDcios"); // Importando a classe Exercicio
describe('Exercicio', function () {
    // Teste para exercício do tipo Cardio
    test('Deve criar um exercício de Cardio corretamente', function () {
        var corrida = new exerc_cios_1.Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
        expect(corrida.nome).toBe("Corrida");
        expect(corrida.tipo).toBe("Cardio");
        expect(corrida.duracao).toBe(30);
        expect(corrida.repeticoes).toBeUndefined();
        expect(corrida.series).toBeUndefined();
        expect(corrida.descricao).toBe("Corrida na esteira");
    });
    // Teste para exercício do tipo Musculação
    test('Deve criar um exercício de Musculação corretamente', function () {
        var supino = new exerc_cios_1.Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");
        expect(supino.nome).toBe("Supino");
        expect(supino.tipo).toBe("Musculação");
        expect(supino.duracao).toBeUndefined();
        expect(supino.repeticoes).toBe(12);
        expect(supino.series).toBe(4);
        expect(supino.descricao).toBe("Exercício para peito");
    });
    // Teste para o método exibirInformacoes()
    test('Deve exibir as informações corretamente', function () {
        var corrida = new exerc_cios_1.Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
        // Mock do console.log
        console.log = jest.fn();
        corrida.exibirInformacoes();
        expect(console.log).toHaveBeenCalledWith('Exercício: Corrida');
        expect(console.log).toHaveBeenCalledWith('Tipo: Cardio');
        expect(console.log).toHaveBeenCalledWith('Duração: 30 minutos');
        expect(console.log).toHaveBeenCalledWith('Descrição: Corrida na esteira');
    });
    // Teste quando a descrição não é fornecida
    test('Não deve exibir a descrição se não for fornecida', function () {
        var corrida = new exerc_cios_1.Exercicio("Corrida", "Cardio", 30);
        // Mock do console.log
        console.log = jest.fn();
        corrida.exibirInformacoes();
        expect(console.log).toHaveBeenCalledWith('Exercício: Corrida');
        expect(console.log).toHaveBeenCalledWith('Tipo: Cardio');
        expect(console.log).toHaveBeenCalledWith('Duração: 30 minutos');
        expect(console.log).not.toHaveBeenCalledWith('Descrição:');
    });
});
