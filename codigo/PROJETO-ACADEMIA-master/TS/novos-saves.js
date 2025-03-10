function salvarAluno() {
    try {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);
        const objetivo = document.getElementById("objetivo").value;
        const imc = (peso / (altura * altura)).toFixed(2);
        const aluno = { nome, idade, altura, peso, imc, objetivo };
        const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
        alunos.push(aluno);
        localStorage.setItem("alunos", JSON.stringify(alunos));
        alert("Aluno cadastrado com sucesso!");
        window.close();
    }
    catch (error) {
        console.error("erro ao cadastrar aluno.", error);
        alert('ocorreu aconteceu um erro ao cadastrar o aluno. tente novamente.');
    }
}
function salvarInstrutor() {
    try {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const formacao = document.getElementById("formacao").value;
        const email = document.getElementById("email").value;
        const contato = document.getElementById("contato").value;
        const instrutor = { nome, idade, formacao, email, contato };
        const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
        instrutores.push(instrutor);
        localStorage.setItem("instrutores", JSON.stringify(instrutores));
        alert("Instrutor cadastrado com sucesso!");
        window.close();
    }
    catch (error) {
        console.error("erro ao cadrstar intrutor", error);
        alert('ocorreu aconteceu um erro ao cadastrar o instrutor. tente novamente.');
    }
}
function salvarPlanoTreino() {
    try {
        const nome = document.getElementById("nome").value;
        const descricao = document.getElementById("descricao").value;
        const duracao = parseInt(document.getElementById("duracao").value);
        const plano = { nome, descricao, duracao };
        const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
        planos.push(plano);
        localStorage.setItem("planosTreino", JSON.stringify(planos));
        alert("Plano de treino cadastrado com sucesso!");
        window.close();
    }
    catch (error) {
        console.error("erro ao cadrstar o plano de treino", error);
        alert('ocorreu aconteceu um erro ao cadastrar o plano de treino. tente novamente.');
    }
}
function salvarExercicio() {
    try {
        const nome = document.getElementById("nome").value;
        const grupoMuscular = document.getElementById("grupoMuscular").value;
        const repeticoes = parseInt(document.getElementById("repeticoes").value);
        const serie = parseFloat(document.getElementById("carga").value);
        const carga = parseFloat(document.getElementById("carga").value);
        const exercicio = { nome, grupoMuscular, repeticoes, serie, carga };
        const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
        exercicios.push(exercicio);
        localStorage.setItem("exercicios", JSON.stringify(exercicios));
        alert("Exercício cadastrado com sucesso!");
        window.close();
    }
    catch (error) {
        console.error("erro ao cadrstar o exercício", error);
        alert('ocorreu aconteceu um erro ao cadastrar o execício. tente novamente.');
    }
}
