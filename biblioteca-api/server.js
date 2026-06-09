const express = require('express');

const livrosRoutes = require('./src/routes/livrosRoutes');
const emprestimosRoutes = require('./src/routes/emprestimosRoutes');

const app = express();

app.use(express.json());

app.use('/livros', livrosRoutes);
app.use('/emprestimos', emprestimosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});