const { response } = require("express");
const bcrypt = require('bcrypt');

// Model
const User = require('../models/user.model');


const getUsers = (req, res = response) => {
    res.status(200).json({
        mensaje: 'Todo OK con el controlador'
    });
}

const createUser = async(req, res = response) => {
    const {name, lastName, email, password, img, role, google, estado} = req.body;

    const existEmail = await User.findOne({email});

    if(existEmail){
        return res.status(400).json({
            error: 'Correo electrónico ya se encuentra registrado'
        });
    }
    
    // Encriptando password
    const salt = bcrypt.genSaltSync(10);

    const user = new User({name, lastName, email, password, img, role, google, estado});
    user.password = bcrypt.hashSync(password, salt);

    const newUser = await user.save();

    res.status(201).json({
        newUser
    });
}

module.exports = {getUsers, createUser}