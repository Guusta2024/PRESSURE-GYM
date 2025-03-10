window.onload = () => {
h
    const nomeAlunoElement = document.getElementById("nomeAluno") as HTMLSpanElement;

    if (aluno && aluno.nome) {
        nomeAlunoElement.textContent = aluno.nome;
    } else {
        nomeAlunoElement.textContent = "Aluno não encontrado";
    }

};
