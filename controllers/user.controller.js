const { response } = require("express");

// Model
const User = require('../models/user.model');


const getUsers = (req, res = response) => {
    res.status(200).json({
        mensaje: 'Todo OK con el controlador'
    });
}

const createUser = async(req, res = response) => {
    const {name, lastName, email, password} = req.body;
    const user = new User({name, lastName, email, password});

    const newUser = await user.save();

    res.status(201).json({
        newUser
    });
}

module.exports = {getUsers, createUser}