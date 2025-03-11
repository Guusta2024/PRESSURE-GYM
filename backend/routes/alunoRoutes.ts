import express from 'express';
import * as alunoController from '../control/alunoController';

const router = express.Router();

router.get('/', alunoController.getAlunos);
router.post('/', alunoController.criarAluno);

export default router;