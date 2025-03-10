import { salvarAluno } from '../codigo/PROJETO-ACADEMIA-master/TS/novos-saves';
import { JSDOM } from 'jsdom';
describe('Funções de Cadastro', () => {
    let dom;
    beforeEach(() => {
        // Criar o ambiente DOM com JSDOM
        dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
        // Cast para corrigir o erro de tipo, utilizando 'any' no global.window
        global.document = dom.window.document;
        global.window = dom.window; // Forçando 'any' em vez de 'Window'
        global.alert = jest.fn(); // Mock da função alert
        // Mock do localStorage
        const localStorageMock = (() => {
            let store = {};
            return {
                getItem: jest.fn((key) => store[key] || null),
                setItem: jest.fn((key, value) => { store[key] = value; }),
                clear: jest.fn(() => { store = {}; }),
            };
        })();
        global.localStorage = localStorageMock;
        // Criar os inputs necessários no DOM
        document.body.innerHTML = `
      <input id="nome" value="João" />
      <input id="idade" value="25" />
      <input id="altura" value="1.80" />
      <input id="peso" value="70" />
      <input id="objetivo" value="Emagrecimento" />
    `;
    });
    afterEach(() => {
        // Limpar mocks após cada teste
        jest.clearAllMocks();
        dom.window.close(); // Fechar o JSDOM para evitar problemas de memória
    });
    test('deve salvar um aluno corretamente', () => {
        // Chamar a função que será testada
        salvarAluno();
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
