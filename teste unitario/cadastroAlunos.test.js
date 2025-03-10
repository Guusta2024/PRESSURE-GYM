"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadastroAluno_1 = require("./cadastroAluno");
var cadastroAluno_2 = require("./cadastroAluno");
// Mock global do document sem usar jsdom
global.document = {
    getElementById: jest.fn().mockReturnValue({
        addEventListener: jest.fn(),
    }),
};
describe("Pessoa", function () {
    it("deve criar uma instância de Pessoa corretamente", function () {
        var pessoa = new cadastroAluno_1.Pessoa("João", 25, "Masculino");
        expect(pessoa).toBeInstanceOf(cadastroAluno_1.Pessoa);
        expect(pessoa.nome).toBe("João");
        expect(pessoa.idade).toBe(25);
        expect(pessoa.sexo).toBe("Masculino");
    });
    it("deve exibir informações corretamente", function () {
        var pessoa = new cadastroAluno_1.Pessoa("João", 25, "Masculino");
        console.log = jest.fn(); // Mock da função console.log
        pessoa.exibirInformacoes();
        expect(console.log).toHaveBeenCalledWith("Nome: João");
        expect(console.log).toHaveBeenCalledWith("Idade: 25");
        expect(console.log).toHaveBeenCalledWith("Sexo: Masculino");
    });
});
describe("AlunoClass", function () {
    it("deve criar uma instância de AlunoClass corretamente", function () {
        var aluno = new cadastroAluno_2.AlunoClass("Maria", 22, "Feminino", "12345678901", "maria123", "senha123", "Active Life", 1.65, 60);
        expect(aluno).toBeInstanceOf(cadastroAluno_2.AlunoClass);
        expect(aluno.nome).toBe("Maria");
        expect(aluno.idade).toBe(22);
        expect(aluno.sexo).toBe("Feminino");
        expect(aluno.cpf).toBe("12345678901");
        expect(aluno.login).toBe("maria123");
        expect(aluno.senha).toBe("senha123");
        expect(aluno.academia).toBe("Active Life");
        expect(aluno.altura).toBe(1.65);
        expect(aluno.peso).toBe(60);
    });
    it("deve exibir as informações do aluno corretamente", function () {
        var aluno = new cadastroAluno_2.AlunoClass("Maria", 22, "Feminino", "12345678901", "maria123", "senha123", "Active Life", 1.65, 60);
        console.log = jest.fn(); // Mock da função console.log
        aluno.exibirInformacoesAluno();
        expect(console.log).toHaveBeenCalledWith("Nome: Maria");
        expect(console.log).toHaveBeenCalledWith("Idade: 22");
        expect(console.log).toHaveBeenCalledWith("Sexo: Feminino");
        expect(console.log).toHaveBeenCalledWith("CPF: 12345678901");
        expect(console.log).toHaveBeenCalledWith("Login: maria123");
        expect(console.log).toHaveBeenCalledWith("Senha: senha123");
        expect(console.log).toHaveBeenCalledWith("Academia: Active Life");
        expect(console.log).toHaveBeenCalledWith("Altura: 1.65m");
        expect(console.log).toHaveBeenCalledWith("Peso: 60kg");
    });
    it("deve mockar o método `getElementById` sem usar jsdom", function () {
        // Mock do método `getElementById` sem jsdom
        var mockGetElementById = jest.fn().mockReturnValue({
            addEventListener: jest.fn(),
        });
        document.getElementById = mockGetElementById; // Sobrescreve global.document.getElementById
        // A função que usa o `getElementById`
        var form = document.getElementById("cadastroAlunosform");
        form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
            event.preventDefault();
        });
        // Verifica se o `getElementById` foi chamado corretamente
        expect(mockGetElementById).toHaveBeenCalledWith("cadastroAlunosform");
        expect(form === null || form === void 0 ? void 0 : form.addEventListener).toHaveBeenCalledWith("submit", expect.any(Function));
        // Limpar mocks depois do teste (opcional)
        document.getElementById = jest.fn();
    });
});
describe("validarCPF", function () {
    it("deve retornar true para um CPF válido", function () {
        var cpfValido = "12345678901";
        expect((0, cadastroAluno_2.validarCPF)(cpfValido)).toBe(true);
    });
    it("deve retornar false para um CPF inválido", function () {
        var cpfInvalido = "123";
        expect((0, cadastroAluno_2.validarCPF)(cpfInvalido)).toBe(false);
    });
});
