const Role = require('../models/role.mode');
const User = require('../models/user.model');

const existUserById = async(id) =>  {
    const existUser = await User.findById(id);

    if(!existUser){
        throw new Error(`No existe usuario con id: ${id}`);
    }
}

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

module.exports = { isValidRole, isUniqueEmail, existUserById }

