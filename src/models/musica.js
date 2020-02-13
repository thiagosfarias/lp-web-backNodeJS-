const mongoose = require('../database/database');
const Artista = require('../models/artista');


const MusicaSchema = new mongoose.Schema({
    titulo: {
        type:String,
        required: true,
    },
    interprete: {
        type: String,
        required: true,
    }
});


const Musica = mongoose.model('Musica', MusicaSchema);

module.exports = Musica;