const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true 
    },
    google: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);

