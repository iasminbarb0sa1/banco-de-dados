const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.get('/', async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ messagem: 'Usuário não encontrado' });
});

router.post('/', async (req, res) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
})

router.delete('/', async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.json({ messagme: 'Usuário deletado' });
});

module.exports = router