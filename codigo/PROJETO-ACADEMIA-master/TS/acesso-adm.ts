(function() {
function abrirCadastroAluno(): void {
    try{
        window.open("novos-alunos.html", "_blank", "width=600,height=700");
    } catch (error){
        console.error("Erro ao tentar abrir o cadastro do aluno", error)
        alert('ocorreu um erro ao tentar abrir o cadastro do aluno. tente novamente!')
    }
}

function abrirCadastroInstrutor(): void {
    try{
        window.open("novos-instrutores.html", "_blank", "width=600,height=700");
    } catch (error) {
        console.error('Erro aotentar abrir o cadastro do intrutor', error)
        alert('ocorreu um erro ao abrir o cadastro do intrutor. tente novamente!')
    }
}

function abrirCadastroPlanoTreino(): void {
    try{
        window.open("novos-planosTreinos.html", "_blank", "width=600,height=700");
    }catch (error){
        console.error('Erro ao abrir cadastro do plano de treino', error)
        alert('Ocorreu um erro ao abrir o cadastro do plano de treino')
    }
}

function abrirCadastroExercicio(): void {
    try{
        window.open("novos-exercicios.html", "_blank", "width=600,height=700");
    } catch(error){
        console.error("erro ao tentar abrir cadastro do execício", error)
        alert('Ocorreu um erro ao abrir o cadastro do execício')
    }
}
})
function excluirAluno(index: number): void {
    try{
        const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
        alunos.splice(index, 1);
        localStorage.setItem("alunos", JSON.stringify(alunos));
        listarAlunos();
        alert("Aluno excluído com sucesso!");
    } catch (error){
        console.error("erro ao excluir aluno", error)
        alert("ocorreu um erro ao excluir aluno. Tente novamente!")
    }
}

function excluirInstrutor(index: number): void {
    try{
        const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
        instrutores.splice(index, 1);
        localStorage.setItem("instrutores", JSON.stringify(instrutores));
        listarInstrutores();
        alert("Instrutor excluído com sucesso!");
    } catch (error){
        console.error("erro ao excluir instrutor", error)
        alert("Ocorreu um erro ao excluir instrutor. Tente novamente!")
    }
}

function excluirPlanoTreino(index: number): void {
    try{
        const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
        planos.splice(index, 1);
        localStorage.setItem("planosTreino", JSON.stringify(planos));
        listarPlanosTreino();
        alert("Plano de treino excluído com sucesso!");
    } catch (error){
        console.error("erro ao excluir plano de treino", error)
        alert("Ocorreu um erro ao excluir plano de treino. Tente novamente!")
    }
}

function excluirExercicio(index: number): void {
    try{
        const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
        exercicios.splice(index, 1);
        localStorage.setItem("exercicios", JSON.stringify(exercicios));
        listarExercicios();
        alert("Exercício excluído com sucesso!");
    } catch (error){
        console.error("erro ao excluir execício", error)
        alert('Ocorreu um erro ao excluir execício. Tente novamento!')
    }
}


function listarAlunos(): void {
    try{
        const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
        const tabela = document.getElementById("tabelaAlunos")?.querySelector("tbody");
        if (tabela) {
            tabela.innerHTML = "";
            alunos.forEach((aluno: any, index: number) => {
                const row = tabela.insertRow();
                row.insertCell(0).textContent = aluno.nome;
                row.insertCell(1).textContent = aluno.idade.toString();
                row.insertCell(2).textContent = aluno.altura.toString();
                row.insertCell(3).textContent = aluno.peso.toString();
                row.insertCell(4).textContent = aluno.imc.toString();
                row.insertCell(5).textContent = aluno.objetivo;

                const deleteCell = row.insertCell(6);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Excluir";
                deleteButton.className = "btn-delete";
                deleteButton.onclick = () => excluirAluno(index);
                deleteCell.appendChild(deleteButton);
            });
        }
    } catch (error){
        console.error("erro ao listar alunos", error)
        alert("ocorreu um erro ao listrar alunos")
    }
}

function listarInstrutores(): void {
    try{
        const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
        const tabela = document.getElementById("tabelaInstrutores")?.querySelector("tbody");
        if (tabela) {
            tabela.innerHTML = "";
            instrutores.forEach((instrutor: any, index: number) => {
                const row = tabela.insertRow();
                row.insertCell(0).textContent = instrutor.nome;
                row.insertCell(1).textContent = instrutor.idade.toString();
                row.insertCell(2).textContent = instrutor.formacao;
                row.insertCell(3).textContent = instrutor.email;
                row.insertCell(4).textContent = instrutor.contato;

                const deleteCell = row.insertCell(5);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Excluir";
                deleteButton.className = "btn-delete";
                deleteButton.onclick = () => excluirInstrutor(index);
                deleteCell.appendChild(deleteButton);
            });
        }
    } catch (error){
        console.error("erro ao listar instrutores", error)
        alert("ocorreu um erro ao listrar instrutores")
    }
}
function listarPlanosTreino(): void {
    try{
        const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
        const tabela = document.getElementById("tabelaPlanosTreino")?.querySelector("tbody");
        if (tabela) {
            tabela.innerHTML = "";
            planos.forEach((plano: any, index: number) => {
                const row = tabela.insertRow();
                row.insertCell(0).textContent = plano.nome;
                row.insertCell(1).textContent = plano.descricao;
                row.insertCell(2).textContent = plano.duracao.toString();

                const deleteCell = row.insertCell(3);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Excluir";
                deleteButton.className = "btn-delete";
                deleteButton.onclick = () => excluirPlanoTreino(index);
                deleteCell.appendChild(deleteButton);
            });
        }
    } catch (error)  {
        console.error("erro ao listar plano de treino", error)
        alert("ocorreu um erro ao listrar plano de treino")
    }
}

function listarExercicios(): void {
    try{
        const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
        const tabela = document.getElementById("tabelaExercicios")?.querySelector("tbody");
        if (tabela) {
            tabela.innerHTML = "";
            exercicios.forEach((exercicio: any, index: number) => {
                const row = tabela.insertRow();
                row.insertCell(0).textContent = exercicio.nome;
                row.insertCell(1).textContent = exercicio.grupoMuscular;
                row.insertCell(2).textContent = exercicio.repeticoes.toString();
                row.insertCell(3).textContent = exercicio.carga.toString();

                const deleteCell = row.insertCell(4);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Excluir";
                deleteButton.className = "btn-delete";
                deleteButton.onclick = () => excluirExercicio(index);
                deleteCell.appendChild(deleteButton);
            });
        }
    } catch (error){
        console.error("erro ao listar execícios", error)
        alert("ocorreu um erro ao listrar execícios")
    }
}
window.onload = () => {
    listarAlunos();
    listarInstrutores();
    listarPlanosTreino();
    listarExercicios();
};