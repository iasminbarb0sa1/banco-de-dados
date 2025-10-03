const db = require('../database/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows[0];
};

const getUserById = async (id) =>{
    const [rows] = await db.query ('SELECT * FROM users WHERE id = ?', [id])
}

const createUser = async (user) => {
    const { nome, email } = user;
    const { result } = await db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email]);
    return { id: result.insertId, ...user };
};

const deleteUser = async (id) => {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
    return { messagem: 'Usuário deletado' };
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };