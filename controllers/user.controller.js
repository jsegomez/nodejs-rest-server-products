const { response } = require("express");


const getUsers = (req, res = response) => {
    res.status(200).json({
        mensaje: 'Todo OK con el controlador'
    });
}

module.exports = {getUsers}