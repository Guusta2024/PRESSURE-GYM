import Instrutor from './instrutor'; // Importa a classe Instrutor
describe('Instrutor', () => {
    let instrutor;
    beforeEach(() => {
        // Inicializa uma nova instância da classe Instrutor antes de cada teste
        instrutor = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
    });
    test('deve criar um instrutor com os dados corretos', () => {
        expect(instrutor.nome).toBe("Carlos");
        expect(instrutor.idade).toBe(40);
        expect(instrutor.sexo).toBe("Masculino");
        expect(instrutor.formacao).toBe("Educação Física");
    });
    test('deve exibir as informações do instrutor corretamente', () => {
        const consoleSpy = jest.spyOn(console, 'log'); // Espiona o console.log
        instrutor.exibirInformacoesInstrutor(); // Chama o método para exibir as informações do instrutor
        expect(consoleSpy).toHaveBeenCalledWith("Nome: Carlos");
        expect(consoleSpy).toHaveBeenCalledWith("Idade: 40");
        expect(consoleSpy).toHaveBeenCalledWith("Sexo: Masculino");
        expect(consoleSpy).toHaveBeenCalledWith("Formação: Educação Física");
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
});
