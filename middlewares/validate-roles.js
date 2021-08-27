const { response } = require("express");

const adminRole = (req, res = response, next) => {
    const user = req.uid;

    if(!user){
        return res.status(400).json({
            message: 'Debe iniciar sesión'
        });
    }

    const { role } = user;

    if(role !== 'ADMIN_ROLE'){
        return res.status(401).json({
            message: 'Acción no autorizada, consultar administrador'
        });
    }

    next();
}

module.exports = {
    adminRole
}