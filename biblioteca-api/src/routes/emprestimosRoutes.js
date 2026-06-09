const express = require('express');
const router = express.Router();

const emprestimosController = require('../controllers/emprestimosController');

router.get('/', emprestimosController.listarEmprestimos);
router.post('/', emprestimosController.cadastrarEmprestimo);
router.delete('/:id', emprestimosController.removerEmprestimo);

module.exports = router;