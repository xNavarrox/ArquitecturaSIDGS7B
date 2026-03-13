const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    prioridad: {
        type: String,
        enum: ['baja', 'media', 'alta'],
        required: true,
        default: 'media'
    },
    estado: {
        type: String,
        default: 'abierto',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reporte', reportSchema);
