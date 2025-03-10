"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoController = void 0;
var AlunoController = /** @class */ (function () {
    function AlunoController() {
    }
    return AlunoController;
}());
exports.AlunoController = AlunoController;
try {
    getUsers(req, Request, res, Response);
    {
        return res.json({ message: "Listando Alunos!" });
    }
    createUser(req, Request, res, Response);
    {
        var _a = req.body, id = _a.id, name_1 = _a.name, nascimento = _a.nascimento, sexo = _a.sexo, peso = _a.peso, altura = _a.altura, usuario = _a.usuario, senha = _a.senha;
        return res.status(201).json({ message: "Aluno ".concat(name_1, " cadastrado com sucesso!") });
    }
}
finally {
}
try { }
catch (error) {
    console.log({ "erro ao cadastrar": error });
}
