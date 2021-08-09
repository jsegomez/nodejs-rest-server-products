const { Router } = require('express');
const { getUsers, createUser } = require('../controllers/user.controller');

const router = Router();

router.get('/', getUsers);

router.post('/:id', createUser);

module.exports = router;