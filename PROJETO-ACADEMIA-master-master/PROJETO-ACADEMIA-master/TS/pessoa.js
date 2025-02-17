var Pessoa = /** @class */ (function () {
    // Construtor para inicializar os dados da pessoa
    function Pessoa(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    // Método para exibir as informações da pessoa
    Pessoa.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Idade: ".concat(this.idade));
        console.log("Sexo: ".concat(this.sexo));
    };
    return Pessoa;
}());
// Criando uma instância da classe Pessoa
var pessoa1 = new Pessoa("João", 30, "Masculino");
// Chamando o método para exibir as informações
pessoa1.exibirInformacoes();
