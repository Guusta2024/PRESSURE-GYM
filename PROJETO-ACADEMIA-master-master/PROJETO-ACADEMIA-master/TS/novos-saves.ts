function salvarAluno(): void {
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const idade = parseInt((document.getElementById("idade") as HTMLInputElement).value);
    const altura = parseFloat((document.getElementById("altura") as HTMLInputElement).value);
    const peso = parseFloat((document.getElementById("peso") as HTMLInputElement).value);
    const objetivo = (document.getElementById("objetivo") as HTMLInputElement).value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const aluno = { nome, idade, altura, peso, imc, objetivo };

    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));

    alert("Aluno cadastrado com sucesso!");
    window.close();
}

function salvarInstrutor(): void {
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const idade = parseInt((document.getElementById("idade") as HTMLInputElement).value);
    const formacao = (document.getElementById("formacao") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contato = (document.getElementById("contato") as HTMLInputElement).value;

    const instrutor = { nome, idade, formacao, email, contato };

    const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
    instrutores.push(instrutor);
    localStorage.setItem("instrutores", JSON.stringify(instrutores));

    alert("Instrutor cadastrado com sucesso!");
    window.close();
}
function salvarPlanoTreino(): void {
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const descricao = (document.getElementById("descricao") as HTMLTextAreaElement).value;
    const duracao = parseInt((document.getElementById("duracao") as HTMLInputElement).value);

    const plano = { nome, descricao, duracao };

    const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
    planos.push(plano);
    localStorage.setItem("planosTreino", JSON.stringify(planos));

    alert("Plano de treino cadastrado com sucesso!");
    window.close();
}

function salvarExercicio(): void {
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const grupoMuscular = (document.getElementById("grupoMuscular") as HTMLInputElement).value;
    const repeticoes = parseInt((document.getElementById("repeticoes") as HTMLInputElement).value);
    const serie = parseFloat((document.getElementById("carga") as HTMLInputElement).value);
    const carga = parseFloat((document.getElementById("carga") as HTMLInputElement).value);

    const exercicio = { nome, grupoMuscular, repeticoes, serie, carga };

    const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
    exercicios.push(exercicio);
    localStorage.setItem("exercicios", JSON.stringify(exercicios));

    alert("Exercício cadastrado com sucesso!");
    window.close();
}
