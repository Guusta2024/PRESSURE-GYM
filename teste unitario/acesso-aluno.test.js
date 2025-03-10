// app.test.ts
import { JSDOM } from 'jsdom';
describe('Testando comportamento do window.onload', () => {
    // Mock de localStorage
    const localStorageMock = (() => {
        let store = {};
        return {
            getItem: (key) => store[key] || null,
            setItem: (key, value) => {
                store[key] = value.toString();
            },
            removeItem: (key) => {
                delete store[key];
            },
            clear: () => {
                store = {};
            }
        };
    })();
    // Mockando o localStorage global
    beforeAll(() => {
        Object.defineProperty(global, 'localStorage', {
            value: localStorageMock
        });
    });
    // Limpando o mock de localStorage após cada teste
    afterEach(() => {
        localStorage.clear();
    });
    it('Deve exibir o nome do aluno se existir no localStorage', () => {
        // Definir o valor de "Aluno" no localStorage
        const aluno = { nome: 'João' };
        localStorage.setItem('Aluno', JSON.stringify(aluno));
        // Usando o JSDOM para simular o DOM
        const dom = new JSDOM('<!DOCTYPE html><html><body><span id="nomeAluno"></span></body></html>');
        const { window } = dom;
        // Atribuindo globalmente, mas garantindo que o tipo seja compatível
        global.document = window.document;
        global.window = window;
        // Simulando o comportamento do window.onload manualmente
        window.onload = (event) => {
            const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
            const nomeAlunoElement = document.getElementById("nomeAluno");
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
        const nomeAlunoElement = document.getElementById("nomeAluno");
        expect(nomeAlunoElement.textContent).toBe('João');
    });
    it('Deve exibir "Aluno não encontrado" se não houver aluno no localStorage', () => {
        // Garantir que o localStorage não tenha o item "Aluno"
        localStorage.removeItem('Aluno');
        // Usando o JSDOM para simular o DOM
        const dom = new JSDOM('<!DOCTYPE html><html><body><span id="nomeAluno"></span></body></html>');
        const { window } = dom;
        // Atribuindo globalmente, mas garantindo que o tipo seja compatível
        global.document = window.document;
        global.window = window;
        // Simulando o comportamento do window.onload manualmente
        window.onload = (event) => {
            const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
            const nomeAlunoElement = document.getElementById("nomeAluno");
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
        const nomeAlunoElement = document.getElementById("nomeAluno");
        expect(nomeAlunoElement.textContent).toBe('Aluno não encontrado');
    });
});
