class Pessoa {
    nome: string;
    idade: number;
    sexo: string;
  
    // Construtor para inicializar os dados da pessoa
    constructor(nome: string, idade: number, sexo: string) {
      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo;
    }
  
    // Método para exibir as informações da pessoa
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Sexo: ${this.sexo}`);
    }
  }
  
  // Criando uma instância da classe Pessoa
  const pessoa1 = new Pessoa("João", 30, "Masculino");
  
  // Chamando o método para exibir as informações
  pessoa1.exibirInformacoes();
  