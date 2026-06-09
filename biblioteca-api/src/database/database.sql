create database db;
use db;


CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    isbn VARCHAR(20) UNIQUE,
    ano_publicacao INT,
    quantidade INT
);

CREATE TABLE emprestimos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_aluno VARCHAR(100) NOT NULL,
    livro_id INT NOT NULL,
    data_emprestimo DATE,
    data_devolucao DATE,
    status VARCHAR(30),

    FOREIGN KEY (livro_id)
    REFERENCES livros(id)
);