const express = require('express');
const router = express.Router();
const Album = require('../models/album');

router.post('/busca-por-titulo', async (req, res) => {
    const { titulo } = req.body;
    const { album } = await Album.findOne({titulo});
    try {
        if (!album) {
            return res.status(400).send({ error: 'Album nao encontrado'});
        }
        return res.status(200).send({ album });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
});


router.get('/lista', async (req, res) => {
    const album = await Album.find({});
    try{
        if(!album) {
            return res.status(400).send({ error: 'Nao ha albuns cadastradas'});
        } 
        return res.status(200).send({ album });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
});

router.post('/de-um-artista', async (req, res) => {
    const { interprete } = req.body;
    const album = await Album.find({ interprete });
    try{
        if(!album){
            return res.status(400).send({ error: 'Nao ha albuns desse artista' });
        }
        return res.status(200).send({ album });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
});


router.post('/register', async (req, res) => {
    const { titulo } = req.body;
    try {
        if (await Album.findOne({ titulo })) {
            return res.status(400).send({ error: 'Album já esta cadastrada' })
        }
        const album = await Album.create(req.body);

        return res.send({ album });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro no registro' });
    }
});


module.exports = app => app.use('/album', router);