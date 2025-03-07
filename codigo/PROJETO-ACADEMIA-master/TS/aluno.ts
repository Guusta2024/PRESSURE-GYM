class Aluno extends Pessoa {
    CPF: string;
    altura: string;
    peso: string;
    usuario: string;
    senha: string;
  
    // Construtor para inicializar os dados do instrutor (incluindo os dados da pessoa)
    constructor(nome: string, idade: number, sexo: string, CPF: string, Altura: string, Peso: string, Usuario: string, Senha: string) {
      // Chama o construtor da classe base (Pessoa)
      super(nome, idade, sexo);
      
      // Inicializa a propriedade específica de Instrutor
      this.CPF = CPF;
      this.altura = Altura;
      this.peso = Peso;
      this.usuario = Usuario;
      this.senha = Senha; 
    }
  
    // Método para exibir todas as informações (da Pessoa e do Aluno)
    exibirInformacoesAluno(): void {
      this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
      console.log(`CPF: ${this.CPF}`);
      console.log(`Altura: ${this.altura}`)
      console.log(`Peso: ${this.peso}`)
      console.log(`Usuário: ${this.usuario}`)
      console.log(`Senha: ${this.senha}`)
    }
  }
  
  // Criando uma instância da classe Instrutor
  const aluno1 = new Aluno("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
  
  // Chamando o método para exibir as informações do instrutor
    aluno1.exibirInformacoesAluno();