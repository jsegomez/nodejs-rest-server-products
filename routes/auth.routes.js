const { Router } = require('express');
const { check } = require('express-validator');

// Funciones del controlador
const { login } = require('../controllers/auth.controller');
const { existEmailLogin, userIsActive } = require('../helpers/db-validators');

// Validaciones
const { validateFields }  = require('../middlewares/validate-fields');

// Consolidado de rutas
const router = Router();

router.post('/login', [
    check('email', 'Favor indicar su correo electrónico')
        .isEmail()
        .custom(existEmailLogin)
        .custom(userIsActive),
    check('password', 'Contraseña debe contener al menos 8 caracteres').isLength({min: 8}),
    validateFields
], login);

module.exports = router;


