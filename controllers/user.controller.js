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
   
    const user = new User({name, lastName, email, password, img, role, google, estado});
    user.password = encryptPassword(password);

    const newUser = await user.save();

    res.status(201).json({
        newUser
    });
}

const  updateUser = async(req, res = response) => {
    const { id } = req.params;
    let {_id, google, password, email, ...user} = req.body;

    // TODO validate user exist

    if(password){        
        user.password = encryptPassword(password);
    }

    const userUpdated = await User.findByIdAndUpdate(id, user, {new: true});

    res.status(201).json({
        user: userUpdated
    });
}

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = {getUsers, createUser, updateUser}