exports.listarEmprestimos = (req, res) => {
    res.json({
        mensagem: "Lista de empréstimos"
    });
};

exports.cadastrarEmprestimo = (req, res) => {
    res.json({
        mensagem: "Empréstimo cadastrado com sucesso"
    });
};

exports.removerEmprestimo = (req, res) => {
    res.json({
        mensagem: "Empréstimo removido com sucesso"
    });
};