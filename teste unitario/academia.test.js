import Academia from './academia'; // Importa a classe Academia
import Aluno from './aluno'; // Importa a classe Aluno
import Instrutor from './instrutor'; // Importa a classe Instrutor
import Exercicio from './exercicios'; // Importa a classe Exercicio
describe('Academia', () => {
    let academia;
    beforeEach(() => {
        academia = new Academia(); // Inicializa uma nova instância da Academia antes de cada teste
    });
    test('deve adicionar um aluno com sucesso', () => {
        const aluno = new Aluno("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
        academia.adicionarAluno(aluno);
        expect(academia['alunos']).toContain(aluno); // Verifica se o aluno foi adicionado
    });
    test('deve adicionar um instrutor com sucesso', () => {
        const instrutor = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
        academia.adicionarInstrutor(instrutor);
        expect(academia['instrutores']).toContain(instrutor); // Verifica se o instrutor foi adicionado
    });
    test('deve adicionar um exercício com sucesso', () => {
        const exercicio = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
        academia.adicionarExercicio(exercicio);
        expect(academia['exercicios']).toContain(exercicio); // Verifica se o exercício foi adicionado
    });
    test('deve exibir a lista de alunos', () => {
        const aluno = new Aluno("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
        academia.adicionarAluno(aluno);
        const consoleSpy = jest.spyOn(console, 'log');
        academia.exibirAlunos();
        expect(consoleSpy).toHaveBeenCalledWith("Lista de Alunos:");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Nome: Jorjão"));
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
    test('deve exibir a lista de instrutores', () => {
        const instrutor = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
        academia.adicionarInstrutor(instrutor);
        const consoleSpy = jest.spyOn(console, 'log');
        academia.exibirInstrutores();
        expect(consoleSpy).toHaveBeenCalledWith("Lista de Instrutores:");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Nome: Carlos"));
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
    test('deve exibir a lista de exercícios', () => {
        const exercicio = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
        academia.adicionarExercicio(exercicio);
        const consoleSpy = jest.spyOn(console, 'log');
        academia.exibirExercicios();
        expect(consoleSpy).toHaveBeenCalledWith("Lista de Exercícios:");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Exercício: Corrida"));
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
});
