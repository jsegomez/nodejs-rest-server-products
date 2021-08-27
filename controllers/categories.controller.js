const { response } = require("express");

const getCategories = async(req, res = response) => {
    res.status(200).json({
        message: 'Todo Ok'
    });
}

const getCategoriesById = async(req, res = response) => {
    res.status(200).json({
        message: 'Todo Ok Category by id'
    });
}

const addCategory = async(req, res = response) => {
    res.status(200).json({
        message: 'Todo Ok Add Category'
    });
}

const updateCategory = async(req, res = response) => {
    res.status(200).json({
        message: 'Todo Ok update category'
    });
}

const deleteCategory = async(req, res = response) => {
    res.status(200).json({
        message: 'Todo Ok delete category'
    });
}

module.exports = { 
    getCategories,
    getCategoriesById,
    addCategory,
    updateCategory,
    deleteCategory
}
