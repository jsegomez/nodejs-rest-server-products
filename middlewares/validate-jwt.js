const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-token'); 

    if(!token){
        return res.status(402).json({
            message: 'Necesita iniciar sesión para continuar'
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPEIVATEKEY);
        req.uid = uid;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Token no válido'
        });
    }
}

module.exports = validateJWT;


