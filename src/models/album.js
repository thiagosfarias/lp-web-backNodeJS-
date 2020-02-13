const mongoose = require('../database/database');
const Artista = require('../models/artista');
const Musica = require('../models/musica');

const AlbumSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    interprete: {
        type: String,
        required: true,
    },
    musicas: [{
        titulo: {
            type:String,
            required: true,
        },
        interprete: {
            type: String,
            required: true,
        }
    }]
});


const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;