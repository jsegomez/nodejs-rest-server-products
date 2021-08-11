const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        require: [true, 'Favor indicar un nombre']
    },
    lastName: {
        type: String,
        require: [true, 'Favor indicar su apellido']
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'Favor indicar correo electrónico']
    },
    password: {
        type: String,
        require: [true, 'Favor proporcionar una contraseña']
    },
    img: {
        type: String,
    },
    role: {
        type: String, 
        required: [true, 'Rol no valido'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

UserSchema.methods.toJSON = function(){
    const { __v, password, _id, ...user } = this.toObject();
    const id = _id;
    user.id = id;
    return user;
}

module.exports = model('User', UserSchema);