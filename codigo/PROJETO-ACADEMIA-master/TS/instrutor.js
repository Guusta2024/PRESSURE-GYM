var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Instrutor = /** @class */ (function (_super) {
    __extends(Instrutor, _super);
    // Construtor para inicializar os dados do instrutor (incluindo os dados da pessoa)
    function Instrutor(nome, idade, sexo, formacao) {
        var _this = this;
        // Validação de dados antes de chamar o construtor da classe base
        _this.validarDados(nome, idade, sexo, formacao);
        // Chama o construtor da classe base (Pessoa)
        _this = _super.call(this, nome, idade, sexo) || this;
        // Inicializa a propriedade específica de Instrutor
        _this.formacao = formacao;
        return _this;
    }
    // Método para validar os dados do instrutor
    Instrutor.prototype.validarDados = function (nome, idade, sexo, formacao) {
        if (!nome || nome.trim() === '') {
            throw new Error("Nome do instrutor não pode ser vazio.");
        }
        if (idade <= 0) {
            throw new Error("Idade deve ser um número positivo.");
        }
        if (sexo !== "Masculino" && sexo !== "Feminino") {
            throw new Error("Sexo deve ser 'Masculino' ou 'Feminino'.");
        }
        if (!formacao || formacao.trim() === '') {
            throw new Error("Formação do instrutor não pode ser vazia.");
        }
    };
    // Método para exibir todas as informações (da Pessoa e do Instrutor)
    Instrutor.prototype.exibirInformacoesInstrutor = function () {
        this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
        console.log("Forma\u00E7\u00E3o: ".concat(this.formacao));
    };
    return Instrutor;
}(Pessoa));
// Criando uma instância da classe Instrutor com tratamento de erros
try {
    var instrutor1 = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
    // Chamando o método para exibir as informações do instrutor
    instrutor1.exibirInformacoesInstrutor();
}
catch (error) {
    console.error("Erro ao criar o instrutor:", error);
}
