// Importando as funções que vamos testar diretamente no mesmo arquivo
function validarCNPJ(cnpj) {
    var cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14;
}
function cadastroAcademia(nome, responsavel, cnpj, endereco, login, senha) {
    if (!nome || !responsavel || !cnpj || !endereco || !login || !senha) {
        return { success: false, message: "Por favor, preencha todos os campos." };
    }
    if (!validarCNPJ(cnpj)) {
        return { success: false, message: "CNPJ inválido." };
    }
    // Cria e salva a nova academia
    var novaAcademia = { nome: nome, responsavel: responsavel, cnpj: cnpj, endereco: endereco, login: login, senha: senha };
    var academias = JSON.parse(localStorage.getItem("academias") || "[]");
    academias.push(novaAcademia);
    localStorage.setItem("academias", JSON.stringify(academias));
    return { success: true, message: "Academia cadastrada com sucesso!" };
}
// Mock de localStorage
global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    key: jest.fn(),
    length: 0,
};
describe('Testes do formulário de cadastro', function () {
    it('Deve validar CNPJ corretamente', function () {
        expect(validarCNPJ('12.345.678/0001-95')).toBe(true);
        expect(validarCNPJ('12345678000195')).toBe(true);
        expect(validarCNPJ('12.345.678/0001-9')).toBe(false);
        expect(validarCNPJ('')).toBe(false);
    });
    it('Deve retornar erro se algum campo estiver vazio', function () {
        var resultado = cadastroAcademia('', 'Responsável', '12.345.678/0001-95', 'Endereço', 'login', 'senha');
        expect(resultado.success).toBe(false);
        expect(resultado.message).toBe('Por favor, preencha todos os campos.');
    });
    it('Deve retornar erro se o CNPJ for inválido', function () {
        var resultado = cadastroAcademia('Academia Teste', 'Responsável', '12.345.678/0001-9', 'Endereço', 'login', 'senha');
        expect(resultado.success).toBe(false);
        expect(resultado.message).toBe('CNPJ inválido.');
    });
    it('Deve salvar a academia quando todos os campos estiverem corretos', function () {
        var resultado = cadastroAcademia('Academia Teste', 'Responsável', '12.345.678/0001-95', 'Endereço', 'login', 'senha');
        expect(resultado.success).toBe(true);
        expect(resultado.message).toBe('Academia cadastrada com sucesso!');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('academias', JSON.stringify([{ nome: 'Academia Teste', responsavel: 'Responsável', cnpj: '12.345.678/0001-95', endereco: 'Endereço', login: 'login', senha: 'senha' }]));
    });
});
