var Pessoa = /** @class */ (function () {
    // Construtor para inicializar os dados da pessoa
    function Pessoa(nome, idade, sexo) {
        // Validação de dados antes de atribuir os valores
        this.validarDados(nome, idade, sexo);
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    // Método para validar os dados da pessoa
    Pessoa.prototype.validarDados = function (nome, idade, sexo) {
        if (!nome || nome.trim() === '') {
            throw new Error("Nome não pode ser vazio.");
        }
        if (idade < 0) {
            throw new Error("Idade deve ser um número não negativo.");
        }
        if (sexo !== "Masculino" && sexo !== "Feminino") {
            throw new Error("Sexo deve ser 'Masculino' ou 'Feminino'.");
        }
    };
    // Método para exibir as informações da pessoa
    Pessoa.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Idade: ".concat(this.idade));
        console.log("Sexo: ".concat(this.sexo));
    };
    return Pessoa;
}());
// Criando uma instância da classe Pessoa com tratamento de erros
try {
    var pessoa1 = new Pessoa("João", 30, "Masculino");
    // Chamando o método para exibir as informações
    pessoa1.exibirInformacoes();
}
catch (error) {
    console.error("Erro ao criar a pessoa:", error);
}
