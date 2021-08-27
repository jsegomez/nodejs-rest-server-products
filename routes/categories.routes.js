const { Router } = require('express');
const { check } = require('express-validator');

// Funciones del controlador
const { 
    getCategories,
    getCategoriesById,
    addCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categories.controller')

const validateJWT  = require('../middlewares/validate-jwt');

// Validaciones
const { validateFields } = require('../middlewares/validate-fields');
const { adminRole } = require('../middlewares/validate-roles');

// Consolidado de rutas
const router = Router();

router.get('/', getCategories);

router.get('/:id', getCategoriesById);

router.post('/', addCategory);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);

module.exports = router;