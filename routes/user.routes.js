const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, createUser, updateUser } = require('../controllers/user.controller');

// Validaciones
const { validateFields } = require('../middlewares/validate-fields');
const { isValidRole, isUniqueEmail, existUserById } = require('../helpers/db-validators');

// Consolidado de rutas
const router = Router();

router.get('/', getUsers);

router.post('/', [
    check('name',     'Favor proporcione un nombre').isLength({min: 2}),
    check('lastName', 'Favor proporcionar su apellido').isLength({min: 2}),
    check('email',    'Favor una dirección de correo valida').isEmail().custom(isUniqueEmail),
    check('password', 'Contraseña debe contener al menos 8 caracteres').isLength({min: 8}),
    check('role').custom(isValidRole),
    validateFields
],createUser);

router.put('/:id',[
    [
        check('id', 'Id proporcionado no es valido').isMongoId().custom(existUserById),        
        check('name',     'Favor proporcione un nombre').isLength({min: 2}),
        check('lastName', 'Favor proporcionar su apellido').isLength({min: 2}),
        check('email',    'Favor una dirección de correo valida').isEmail().custom(isUniqueEmail),
        check('password', 'Contraseña debe contener al menos 8 caracteres').isLength({min: 8}),
        check('role').custom(isValidRole),
        validateFields
    ],
    updateUser
]);

module.exports = router;