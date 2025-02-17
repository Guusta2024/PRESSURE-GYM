var _a;
// Função para validar o CNPJ
function validarCNPJ(cnpj) {
    var cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14;
}
// Evento para lidar com o envio do formulário
(_a = document.getElementById("cadastroAcademiaForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = document.getElementById("nomeAcademia").value.trim();
    var responsavel = document.getElementById("responsavel").value.trim();
    var cnpj = document.getElementById("cnpj").value.trim();
    var endereco = document.getElementById("endereco").value.trim();
    var login = document.getElementById("login").value.trim();
    var senha = document.getElementById("senha").value.trim();
    if (!nome || !responsavel || !cnpj || !endereco || !login || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    if (!validarCNPJ(cnpj)) {
        alert("CNPJ inválido.");
        return;
    }
    // Cria e salva a nova academia
    var novaAcademia = { nome: nome, responsavel: responsavel, cnpj: cnpj, endereco: endereco, login: login, senha: senha };
    var academias = JSON.parse(localStorage.getItem("academias") || "[]");
    academias.push(novaAcademia);
    localStorage.setItem("academias", JSON.stringify(academias));
    alert("Academia cadastrada com sucesso!");
    window.location.href = "acesso-adm.html"; // Redirecionar
});
