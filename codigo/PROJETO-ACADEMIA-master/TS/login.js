var _a;
(_a = document.getElementById("loginForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var loginInput = document.getElementById("username");
    var senhaInput = document.getElementById("password");
    var login = loginInput.value.trim();
    var senha = senhaInput.value.trim();
    function mostrarMensagem(mensagem) {
        alert(mensagem);
    }
    var academias = JSON.parse(localStorage.getItem("academias") || "{}");
    console.log("Dados do LocalStorage (academias):", academias);
    if (!academias || !academias.login || !academias.senha) {
        mostrarMensagem("Nenhuma academia cadastrada. Cadastre-se primeiro.");
        return;
    }
    if (login === academias.login && senha === academias.senha) {
        mostrarMensagem("Login bem-sucedido como administrador!");
        console.log("Login bem-sucedido. Redirecionando para página de administração...");
        window.location.href = "acesso-adm.html";
        return;
    }
    var aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
    console.log("Dados do LocalStorage (Aluno):", aluno);
    if (!aluno || !aluno.login || !aluno.senha) {
        mostrarMensagem("Nenhum aluno cadastrado em nosso sistema. Cadastre-se primeiro.");
        return;
    }
    if (login === aluno.login && senha === aluno.senha) {
        mostrarMensagem("Login bem-sucedido! Seja Bem-Vindo, aluno.");
        console.log("Login bem-sucedido. Redirecionando para a página do aluno...");
        window.location.href = "acesso-aluno.html";
    }
    else {
        mostrarMensagem("Login ou senha incorretos! Por favor, tente novamente.");
    }
});
