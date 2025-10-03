CREATE DATABASE IF NOT EXISTS users_db;
USE users_db;

CREATE TABLE IF NOT EXISTS users(
id_users INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (100),
email VARCHAR(100)
);
 
INSERT INTO users (nome, email) VALUES
('Ana Souza', 'ana.souza@example.com'),
('Bruno Lima', 'bruno.lima@example.com'),
('Carla Mendes', 'carla.mendes@example.com'),
('Daniel Rocha', 'daniel.rocha@example.com'),
('Eduarda Silva', 'eduarda.silva@example.com'),
('Felipe Martins', 'felipe.martins@example.com'),
('Gabriela Castro', 'gabriela.castro@example.com'),
('Henrique Alves', 'henrique.alves@example.com'),
('Isabela Freitas', 'isabela.freitas@example.com'),
('João Pedro', 'joao.pedro@example.com');

