const express = require('express');
const router = express.Router();
const Musica = require('../models/musica');

router.post('/busca-por-titulo', async (req, res) => {
    const { titulo } = req.body;
    const { musica } = await Musica.findOne({titulo});

    try {
        if (!musica) {
            return res.status(400).send({ error: 'Musica nao encontrada'});
        }
        return res.status(200).send({ musica });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
});

router.get('/lista', async (req, res) => {
    const musica = await Musica.find({});
    try{
        if(!musica) {
            return res.status(400).send({ error: 'Nao ha musicas cadastradas'});
        } 
        return res.status(200).send({ musica });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
});

router.post('/de-um-artista', async (req, res) => {
    const {interprete} = req.body;
    const musica = await Musica.find({interprete});
    try{
        if(!musica){
            return res.status(400).send({ error: 'Nao ha musicas desse artista'});
        }
        return res.status(200).send({ musica });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
})


router.post('/register', async (req, res) => {
    const { titulo } = req.body;
    try {
        if (await Musica.findOne({ titulo })) {
            return res.status(400).send({ error: 'Musica já esta cadastrada' })
        }
        const musica = await Musica.create(req.body);

        return res.send({ musica });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro no registro' });
    }
})

module.exports = app => app.use('/musica', router);