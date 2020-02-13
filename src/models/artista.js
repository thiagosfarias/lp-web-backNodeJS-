const mongoose = require('../database/database');

const ArtistaSchema = new mongoose.Schema({
    nome: {
        type:String,
        required: true,
    }
});


const Artista = mongoose.model('Artista', ArtistaSchema);

module.exports = Artista;