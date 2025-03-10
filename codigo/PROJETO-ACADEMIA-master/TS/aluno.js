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
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    // Construtor para inicializar os dados do aluno (incluindo os dados da pessoa)
    function Aluno(nome, idade, sexo, CPF, Altura, Peso, Usuario, Senha) {
        // Chama o construtor da classe base (Pessoa)
        var _this = _super.call(this, nome, idade, sexo) || this;
        // Validação dos dados do aluno
        if (!_this.validarCPF(CPF)) {
            throw new Error("CPF inválido.");
        }
        if (isNaN(Number(Altura)) || Number(Altura) <= 0) {
            throw new Error("Altura deve ser um número positivo.");
        }
        if (isNaN(Number(Peso)) || Number(Peso) <= 0) {
            throw new Error("Peso deve ser um número positivo.");
        }
        _this.CPF = CPF;
        _this.altura = Altura;
        _this.peso = Peso;
        _this.usuario = Usuario;
        _this.senha = Senha;
        return _this;
    }
    // Método para validar CPF (exemplo simples)
    Aluno.prototype.validarCPF = function (CPF) {
        return /^\d{11}$/.test(CPF); // Verifica se o CPF tem 11 dígitos
    };
    // Método para exibir todas as informações (da Pessoa e do Aluno)
    Aluno.prototype.exibirInformacoesAluno = function () {
        try {
            this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
            console.log("CPF: ".concat(this.CPF));
            console.log("Altura: ".concat(this.altura));
            console.log("Peso: ".concat(this.peso));
            console.log("Usu\u00E1rio: ".concat(this.usuario));
            console.log("Senha: ".concat(this.senha));
        }
        catch (error) {
            console.error("Erro ao exibir informações do aluno:", error);
        }
    };
    return Aluno;
}(Pessoa));
// Criando uma instância da classe Aluno
try {
    var aluno1 = new Aluno("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
    // Chamando o método para exibir as informações do aluno
    aluno1.exibirInformacoesAluno();
}
catch (error) {
    console.error("Erro ao criar o aluno:", error);
}
