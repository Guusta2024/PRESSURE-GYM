class Instrutor extends Pessoa {
    formacao: string;
  
    // Construtor para inicializar os dados do instrutor (incluindo os dados da pessoa)
    constructor(nome: string, idade: number, sexo: string, formacao: string) {
      // Chama o construtor da classe base (Pessoa)
      super(nome, idade, sexo);
      
      // Inicializa a propriedade específica de Instrutor
      this.formacao = formacao;
    }
  
    // Método para exibir todas as informações (da Pessoa e do Instrutor)
    exibirInformacoesInstrutor(): void {
      this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
      console.log(`Formação: ${this.formacao}`);
    }
  }
  
  // Criando uma instância da classe Instrutor
  const instrutor1 = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
  
  // Chamando o método para exibir as informações do instrutor
  instrutor1.exibirInformacoesInstrutor();