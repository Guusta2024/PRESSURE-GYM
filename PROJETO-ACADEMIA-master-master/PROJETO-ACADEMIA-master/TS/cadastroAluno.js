"use strict";
var _a;
// Função para validar o CPF
function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    return cpfLimpo.length === 11; // Validação básica
}
// Função para mostrar mensagens de sucesso ou erro
function mostrarMensagem(mensagem, tipo) {
    alert(`${tipo.toUpperCase()}: ${mensagem}`);
}
// Exemplo de como armazenar academias no localStorage
const academias = ["Active Life", "Iron Pressure", "Tchuca Gym"];
localStorage.setItem("academias", JSON.stringify(academias));
// Função para carregar academias no select
function carregarAcademias() {
    const academiaSelect = document.getElementById("academia");
    const academias = JSON.parse(localStorage.getItem("academias") || "[]");
    if (academias.length > 0) {
        academias.forEach((academia) => {
            const option = document.createElement("option");
            option.value = academia;
            option.textContent = academia;
            academiaSelect.appendChild(option);
        });
    }
    else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Nenhuma academia cadastrada";
        academiaSelect.appendChild(option);
    }
}
// Função para cadastrar um aluno
(_a = document.getElementById("cadastroAlunosform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    // Coletando os dados do formulário
    const nome = document.getElementById("nomeAluno").value.trim();
    const idade = parseInt(document.getElementById("idade").value.trim());
    const cpf = document.getElementById("cpf").value.trim();
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const academia = document.getElementById("academia").value;
    const altura = parseFloat(document.getElementById("altura").value.trim());
    const peso = parseFloat(document.getElementById("peso").value.trim());
    // Verificando se todos os campos foram preenchidos
    if (!nome || !idade || !cpf || !login || !senha || !academia || !altura || !peso) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }
    // Validando CPF
    if (!validarCPF(cpf)) {
        mostrarMensagem("CPF inválido.", "erro");
        return;
    }
    // Criando o novo aluno usando a classe Aluno
    const novoAluno = new AlunoClass(nome, idade, "Sexo Não Informado", cpf, login, senha, academia, altura, peso);
    // Armazenando o aluno no localStorage
    localStorage.setItem("Aluno", JSON.stringify(novoAluno));
    // Exibindo a mensagem de sucesso
    mostrarMensagem("Aluno cadastrado com sucesso!", "sucesso");
    // Redirecionando após 2 segundos
    setTimeout(() => {
        window.location.href = "acesso-aluno.html";
    }, 2000);
    // Resetando o formulário
    document.getElementById("cadastroAlunosform").reset();
});
// Carregar academias assim que o DOM for carregado
document.addEventListener("DOMContentLoaded", carregarAcademias);
// Classe Aluno - Extende a classe Pessoa e adiciona campos específicos de aluno
class AlunoClass extends Pessoa {
    constructor(nome, idade, sexo, cpf, login, senha, academia, altura, peso) {
        super(nome, idade, sexo); // Chama o construtor da classe base (Pessoa)
        this.cpf = cpf;
        this.login = login;
        this.senha = senha;
        this.academia = academia;
        this.altura = altura;
        this.peso = peso;
    }
    // Método para exibir todas as informações (da Pessoa e do Aluno)
    exibirInformacoesAluno() {
        this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
        console.log(`CPF: ${this.cpf}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha: ${this.senha}`);
        console.log(`Academia: ${this.academia}`);
        console.log(`Altura: ${this.altura}m`);
        console.log(`Peso: ${this.peso}kg`);
    }
}
