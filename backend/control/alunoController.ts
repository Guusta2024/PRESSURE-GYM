import { Request, Response } from "express";


export class AlunoController {
  try{  static getUsers(req: Request, res: Response) {
      return res.json({ message: "Listando Alunos!" });
    }

    static createUser(req: Request, res: Response) {
      const { id, name, nascimento,  sexo, peso, altura, usuario, senha } = req.body;
      return res.status(201).json({ message: `Aluno ${name} cadastrado com sucesso!` });
    }
  }
} catch (error){
  console.log({"erro ao cadastrar": error})
}
