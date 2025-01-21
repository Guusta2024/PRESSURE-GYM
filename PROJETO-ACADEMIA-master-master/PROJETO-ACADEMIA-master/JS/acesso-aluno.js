window.onload = () => {
    const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
    const academia = JSON.parse(localStorage.getItem("academia") || "{}");

    const nomeAlunoElement = document.getElementById("nomeAluno");

    if (aluno && aluno.nome) {
        nomeAlunoElement.textContent = aluno.nome;
    }
    else {
        nomeAlunoElement.textContent = "Aluno não encontrado";
    }
};
