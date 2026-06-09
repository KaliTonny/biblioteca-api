exports.listarLivros = (req, res) => {
    res.json({
        mensagem: "Lista de livros"
    });
};

exports.buscarLivro = (req, res) => {
    res.json({
        mensagem: `Livro ${req.params.id}`
    });
};

exports.cadastrarLivro = (req, res) => {
    res.json({
        mensagem: "Livro cadastrado com sucesso"
    });
};

exports.atualizarLivro = (req, res) => {
    res.json({
        mensagem: "Livro atualizado com sucesso"
    });
};

exports.removerLivro = (req, res) => {
    res.json({
        mensagem: "Livro removido com sucesso"
    });
};