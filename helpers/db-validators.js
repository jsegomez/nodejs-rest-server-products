const Role = require('../models/role.mode');
const User = require('../models/user.model');

const isValidRole = async(role = '') =>  {
    const existRol = await Role.findOne({role});

    if(!existRol){
        throw new Error(`Rol no es valido`);
    }
}

const isUniqueEmail = async(email = '') =>  {
    const existEmail = await User.findOne({email});

    if(existEmail){
        throw new Error(`Correo electrónico ya se encuentrá registrado`);
    }
}


module.exports = { isValidRole, isUniqueEmail }