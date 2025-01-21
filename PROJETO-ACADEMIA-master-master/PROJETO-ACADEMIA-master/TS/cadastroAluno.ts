// Interface para representar um aluno
interface Aluno {
    nome: string;
    idade: string;
    cpf: string;
    login: string;
    senha: string;
    academia: string;
}

// Função para validar o CPF
function validarCPF(cpf: string): boolean {
    const cpfLimpo = cpf.replace(/[^\d]+/g, '');
    return cpfLimpo.length === 11; // Validação básica
}

// Função para mostrar mensagens
function mostrarMensagem(mensagem: string, tipo: "sucesso" | "erro"): void {
    alert(`${tipo.toUpperCase()}: ${mensagem}`);
}
// Exemplo de como armazenar academias no localStorage
const academias = ["Active Life", "Iron Pressure", "Tchuca Gym"];
localStorage.setItem("academias", JSON.stringify(academias)); 


function carregarAcademias() {
    const academiaSelect = document.getElementById("academia") as HTMLSelectElement;
    

    const academias = JSON.parse(localStorage.getItem("academias") || "[]");


    if (academias.length > 0) {
        academias.forEach((academia: string) => {
            const option = document.createElement("option");
            option.value = academia;  
            option.textContent = academia;  
            academiaSelect.appendChild(option);
        });
    } else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Nenhuma academia cadastrada";
        academiaSelect.appendChild(option);
    }
}


document.getElementById("cadastroAlunosform")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = (document.getElementById("nomeAluno") as HTMLInputElement).value.trim();
    const idade = (document.getElementById("idade") as HTMLInputElement).value.trim();
    const cpf = (document.getElementById("cpf") as HTMLInputElement).value.trim();
    const login = (document.getElementById("login") as HTMLInputElement).value.trim();
    const senha = (document.getElementById("senha") as HTMLInputElement).value.trim();
    const academia = (document.getElementById("academia") as HTMLSelectElement).value;

    if (!nome || !idade || !cpf || !login || !senha || !academia) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }

    if (!validarCPF(cpf)) {
        mostrarMensagem("CPF inválido.", "erro");
        return;
    }


    const novoAluno: Aluno = { nome, idade, cpf, login, senha, academia };


    localStorage.setItem("Aluno", JSON.stringify(novoAluno));
    mostrarMensagem("Aluno cadastrado com sucesso!", "sucesso");


    setTimeout(() => {
        window.location.href = "acesso-aluno.html";
    }, 2000);

    (document.getElementById("cadastroAlunosform") as HTMLFormElement).reset();
});

document.addEventListener("DOMContentLoaded", carregarAcademias);