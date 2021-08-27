import { Schema, model } from 'mongoose';

const CategorySchema = Schema({
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

CategorySchema.methods.toJSON = function(){
    const { __v, password, _id, ...category } = this.toObject();
    const id = _id;
    category.id = id;
    return category;
}

export default model('Category', CategorySchema);