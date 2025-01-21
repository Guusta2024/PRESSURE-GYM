"use strict";
var _a;
// Função para validar o CPF
function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/[^\d]+/g, '');
    return cpfLimpo.length === 11; // Validação básica
}
// Função para mostrar mensagens
function mostrarMensagem(mensagem, tipo) {
    alert(`${tipo.toUpperCase()}: ${mensagem}`);
}
// Exemplo de como armazenar academias no localStorage
const academias = ["Active Life", "Iron Pressure", "Smart Fit"];
localStorage.setItem("academias", JSON.stringify(academias)); // Armazenando como um array de strings
// Função para carregar academias cadastradas no select
function carregarAcademias() {
    const academiaSelect = document.getElementById("academia");
    // Verificar se há academias no localStorage
    const academias = JSON.parse(localStorage.getItem("academias") || "[]");
    // Preencher o select com as academias
    if (academias.length > 0) {
        academias.forEach((academia) => {
            const option = document.createElement("option");
            option.value = academia; // Usando o nome da academia como valor
            option.textContent = academia; // Usando o nome da academia como texto visível
            academiaSelect.appendChild(option);
        });
    }
    else {
        // Se não houver academias cadastradas, adicionar uma opção de aviso
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Nenhuma academia cadastrada";
        academiaSelect.appendChild(option);
    }
}
// Evento para lidar com o envio do formulário
(_a = document.getElementById("cadastroAlunosform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nomeAluno").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const academia = document.getElementById("academia").value;
    // Validação dos campos
    if (!nome || !idade || !cpf || !login || !senha || !academia) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }
    if (!validarCPF(cpf)) {
        mostrarMensagem("CPF inválido.", "erro");
        return;
    }
    // Criando um novo aluno
    const novoAluno = { nome, idade, cpf, login, senha, academia };
    // Salvar o aluno no localStorage
    localStorage.setItem("Aluno", JSON.stringify(novoAluno));
    mostrarMensagem("Aluno cadastrado com sucesso!", "sucesso");
    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
        window.location.href = "acesso-aluno.html";
    }, 2000);
    // Limpar os campos do formulário
    document.getElementById("cadastroAlunosform").reset();
});
// Carregar academias quando a página for carregada
document.addEventListener("DOMContentLoaded", carregarAcademias);
