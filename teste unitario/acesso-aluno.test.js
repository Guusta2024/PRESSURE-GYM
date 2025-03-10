"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.test.ts
var jsdom_1 = require("jsdom");
describe('Testando comportamento do window.onload', function () {
    // Mock de localStorage
    var localStorageMock = (function () {
        var store = {};
        return {
            getItem: function (key) { return store[key] || null; },
            setItem: function (key, value) {
                store[key] = value.toString();
            },
            removeItem: function (key) {
                delete store[key];
            },
            clear: function () {
                store = {};
            }
        };
    })();
    // Mockando o localStorage global
    beforeAll(function () {
        Object.defineProperty(global, 'localStorage', {
            value: localStorageMock
        });
    });
    // Limpando o mock de localStorage após cada teste
    afterEach(function () {
        localStorage.clear();
    });
    it('Deve exibir o nome do aluno se existir no localStorage', function () {
        // Definir o valor de "Aluno" no localStorage
        var aluno = { nome: 'João' };
        localStorage.setItem('Aluno', JSON.stringify(aluno));
        // Usando o JSDOM para simular o DOM
        var dom = new jsdom_1.JSDOM('<!DOCTYPE html><html><body><span id="nomeAluno"></span></body></html>');
        var window = dom.window;
        // Atribuindo globalmente, mas garantindo que o tipo seja compatível
        global.document = window.document;
        global.window = window;
        // Simulando o comportamento do window.onload manualmente
        window.onload = function (event) {
            var aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
            var nomeAlunoElement = document.getElementById("nomeAluno");
            if (aluno && aluno.nome) {
                nomeAlunoElement.textContent = aluno.nome;
            }
            else {
                nomeAlunoElement.textContent = "Aluno não encontrado";
            }
        };
        // Rodar o código que estamos testando (simulando window.onload)
        window.onload(new Event('load'));
        // Verificar se o nome do aluno foi inserido no span
        var nomeAlunoElement = document.getElementById("nomeAluno");
        expect(nomeAlunoElement.textContent).toBe('João');
    });
    it('Deve exibir "Aluno não encontrado" se não houver aluno no localStorage', function () {
        // Garantir que o localStorage não tenha o item "Aluno"
        localStorage.removeItem('Aluno');
        // Usando o JSDOM para simular o DOM
        var dom = new jsdom_1.JSDOM('<!DOCTYPE html><html><body><span id="nomeAluno"></span></body></html>');
        var window = dom.window;
        // Atribuindo globalmente, mas garantindo que o tipo seja compatível
        global.document = window.document;
        global.window = window;
        // Simulando o comportamento do window.onload manualmente
        window.onload = function (event) {
            var aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
            var nomeAlunoElement = document.getElementById("nomeAluno");
            if (aluno && aluno.nome) {
                nomeAlunoElement.textContent = aluno.nome;
            }
            else {
                nomeAlunoElement.textContent = "Aluno não encontrado";
            }
        };
        // Rodar o código que estamos testando (simulando window.onload)
        window.onload(new Event('load'));
        // Verificar se o texto "Aluno não encontrado" foi inserido no span
        var nomeAlunoElement = document.getElementById("nomeAluno");
        expect(nomeAlunoElement.textContent).toBe('Aluno não encontrado');
    });
});
