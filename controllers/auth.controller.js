const { response } = require('express');
const bcrypt = require('bcrypt');

// Token
const generateJWT = require('../helpers/jwt');

// Modelo a trabajar
const User = require('../models/user.model');

const login = async(req, res = response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({email});
        const validPassword = bcrypt.compareSync(password, user.password);

        if(!validPassword){
            return res.status(400).json({message: 'Usuario y/o contraseñas incorrectos'})
        }

        const token = await generateJWT(user.id);
        res.status(200).json(token);        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error})
    }
}

module.exports = {login}





