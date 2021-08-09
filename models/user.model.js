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
    rol: {
        type: String, 
        required: true,
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
    const { __v, password, ...user } = this.toObject();
    return user;
}

module.exports = model('User', UserSchema);