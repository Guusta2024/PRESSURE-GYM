"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
// Função que será testada
var loginFormSubmitHandler = function (login, senha, localStorageMock) {
    function mostrarMensagem(mensagem) {
        console.log(mensagem); // Alterado para console.log para testes
    }
    var academias = JSON.parse(localStorageMock.getItem("academias") || "{}");
    console.log("Dados do LocalStorage (academias):", academias);
    if (!academias || !academias.login || !academias.senha) {
        mostrarMensagem("Nenhuma academia cadastrada. Cadastre-se primeiro.");
        return;
    }
    if (login === academias.login && senha === academias.senha) {
        mostrarMensagem("Login bem-sucedido como administrador!");
        console.log("Login bem-sucedido. Redirecionando para página de administração...");
        return "acesso-adm.html"; // Em vez de window.location.href
    }
    var aluno = JSON.parse(localStorageMock.getItem("Aluno") || "{}");
    console.log("Dados do LocalStorage (Aluno):", aluno);
    if (!aluno || !aluno.login || !aluno.senha) {
        mostrarMensagem("Nenhum aluno cadastrado em nosso sistema. Cadastre-se primeiro.");
        return;
    }
    if (login === aluno.login && senha === aluno.senha) {
        mostrarMensagem("Login bem-sucedido! Seja Bem-Vindo, aluno.");
        console.log("Login bem-sucedido. Redirecionando para a página do aluno...");
        return "acesso-aluno.html"; // Em vez de window.location.href
    }
    else {
        mostrarMensagem("Login ou senha incorretos! Por favor, tente novamente.");
    }
};
// Mock de localStorage para os testes
var localStorageMock = {
    getItem: globals_1.jest.fn().mockImplementation(function (key) {
        var data = {
            "academias": JSON.stringify({ login: "admin", senha: "12345" }),
            "Aluno": JSON.stringify({ login: "student", senha: "54321" })
        };
        return data[key] || null;
    }),
    setItem: globals_1.jest.fn()
};
// Testes usando Jest
describe('loginFormSubmitHandler', function () {
    it('should redirect to "acesso-adm.html" for admin login', function () {
        var result = loginFormSubmitHandler("admin", "12345", localStorageMock);
        expect(result).toBe("acesso-adm.html");
    });
    it('should redirect to "acesso-aluno.html" for student login', function () {
        var result = loginFormSubmitHandler("student", "54321", localStorageMock);
        expect(result).toBe("acesso-aluno.html");
    });
    it('should display message for incorrect login or password', function () {
        var result = loginFormSubmitHandler("admin", "wrongpassword", localStorageMock);
        expect(result).toBeUndefined(); // Não há redirecionamento para senha errada
    });
    it('should show message if no academy is registered', function () {
        localStorageMock.getItem.mockReturnValueOnce(null); // Simulando que não há academias no localStorage
        var result = loginFormSubmitHandler("admin", "12345", localStorageMock);
        expect(result).toBeUndefined(); // Nenhuma página será redirecionada
    });
});
