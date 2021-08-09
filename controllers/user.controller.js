const { response } = require("express");


const getUsers = (req, res = response) => {
    res.status(200).json({
        mensaje: 'Todo OK con el controlador'
    });
}

const createUser = (req, res = response) => {
    const id = req.params.id;

    res.status(201).json({
        data: req.body,
        id
    });
}

module.exports = {getUsers, createUser}