"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var novos_saves_1 = require("./novos-saves");
var jsdom_1 = require("jsdom");
describe('Funções de Cadastro', function () {
    var dom;
    beforeEach(function () {
        // Criar o ambiente DOM com JSDOM
        dom = new jsdom_1.JSDOM("<!DOCTYPE html><html><body></body></html>");
        // Cast para corrigir o erro de tipo, utilizando 'any' no global.window
        global.document = dom.window.document;
        global.window = dom.window; // Forçando 'any' em vez de 'Window'
        global.alert = jest.fn(); // Mock da função alert
        // Mock do localStorage
        var localStorageMock = (function () {
            var store = {};
            return {
                getItem: jest.fn(function (key) { return store[key] || null; }),
                setItem: jest.fn(function (key, value) { store[key] = value; }),
                clear: jest.fn(function () { store = {}; }),
            };
        })();
        global.localStorage = localStorageMock;
        // Criar os inputs necessários no DOM
        document.body.innerHTML = "\n      <input id=\"nome\" value=\"Jo\u00E3o\" />\n      <input id=\"idade\" value=\"25\" />\n      <input id=\"altura\" value=\"1.80\" />\n      <input id=\"peso\" value=\"70\" />\n      <input id=\"objetivo\" value=\"Emagrecimento\" />\n    ";
    });
    afterEach(function () {
        // Limpar mocks após cada teste
        jest.clearAllMocks();
        dom.window.close(); // Fechar o JSDOM para evitar problemas de memória
    });
    test('deve salvar um aluno corretamente', function () {
        // Chamar a função que será testada
        (0, novos_saves_1.salvarAluno)();
        // Verificar se o localStorage foi atualizado corretamente
        expect(localStorage.setItem).toHaveBeenCalledWith("alunos", JSON.stringify([
            {
                nome: "João",
                idade: 25,
                altura: 1.8,
                peso: 70,
                imc: "21.60", // Resultado esperado
                objetivo: "Emagrecimento"
            }
        ]));
        // Verificar se o alert foi disparado corretamente
        expect(global.alert).toHaveBeenCalledWith("Aluno cadastrado com sucesso!");
    });
});
