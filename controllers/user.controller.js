const { response } = require("express");
const bcrypt = require('bcrypt');

// Model
const User = require('../models/user.model');

const getUsers = async(req, res = response) => {
    const { from = 0, limit = 10 } = req.query;

    const [total, users] = await Promise.all([
        User.countDocuments({estado: true}),
        User.find({estado: true})
            .skip(Number(from))
            .limit(Number(limit))
    ]);

    const quantity = users.length;

    res.status(200).json({
        users, quantity, total
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

const updateUser = async(req, res = response) => {
    const { id } = req.params;
    let {_id, google, password, email, ...user} = req.body;

    if(password){        
        user.password = encryptPassword(password);
    }

    const userUpdated = await User.findByIdAndUpdate(id, user, {new: true});

    res.status(201).json({
        user: userUpdated
    });
}

const deleteUser = async(req, res = response) => {
    const { id } = req.params;
    const uid = req.uid;
    console.log(uid);

    const response = await User.findByIdAndUpdate(id, {estado: false}, {new: true}); 

    res.status(200).json({
        ok: true, response
    });
}

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = {getUsers, createUser, updateUser, deleteUser}
