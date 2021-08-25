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

const existEmailLogin = async(email = '') =>  {
    const existEmail = await User.findOne({email});

    if(!existEmail){
        throw new Error('Usuario no registrado');
    }
}

const userIsActive = async(email = '') =>  {
    const existEmail = await User.findOne({email});

    if(!existEmail){
        throw new Error('Usuario no registrado o inactivo');
    }

    if(existEmail.estado == false){
        throw new Error('Usuario inactivo');
    }
}

module.exports = { isValidRole, isUniqueEmail, existUserById, existEmailLogin, userIsActive }

