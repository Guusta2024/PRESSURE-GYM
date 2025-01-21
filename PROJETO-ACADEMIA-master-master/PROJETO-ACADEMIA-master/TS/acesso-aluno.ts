window.onload = () => {
    const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");

    const nomeAlunoElement = document.getElementById("nomeAluno") as HTMLSpanElement;

    if (aluno && aluno.nome) {
        nomeAlunoElement.textContent = aluno.nome;
    } else {
        nomeAlunoElement.textContent = "Aluno não encontrado";
    }

};
