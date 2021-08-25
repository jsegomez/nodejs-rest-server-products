const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const validateJWT = async(req, res = response, next) => {
    const token = req.header('x-token'); 

    if(!token){
        return res.status(402).json({
            message: 'Necesita iniciar sesión para continuar'
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPEIVATEKEY);
        const authenticatedUser  = await User.findById(uid);
        
        if(!authenticatedUser){
            return res.status(400).json({
                message: 'Token no es válido'
            });
        }

        if(authenticatedUser.estado  == false){
            return res.status(400).json({
                message: 'Token no es válido'
            });
        }

        req.uid = authenticatedUser;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Token no válido'
        });
    }
}

module.exports = validateJWT;


