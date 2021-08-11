const { Schema, model } = require('mongoose');

const RolesSchema = Schema({
    rol:{
        type: String,
        require: [true, 'Rol es requerido']
    }
});

module.exports = model('Role', RolesSchema);