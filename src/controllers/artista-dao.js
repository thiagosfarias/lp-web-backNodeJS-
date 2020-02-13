const express = require('express');
const router = express.Router();
const Artista = require('../models/artista');

router.post('/busca-por-nome', async (req, res) => {
    const { nome } = req.body;
    const artista = await Artista.findOne({ nome });
    try {
        if(!artista){
            return res.status(400).send({ error: 'Artista nao encontrado'});
        }
        return res.status(200).send({ artista });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
});

//not working
router.post('/lista', async (req, res) => {
    const { artista } = await Artista.find();
    try{
        if(!artista) {
            return res.status(400).send({ error: 'Nao ha artistas cadastrados'});
        } 
        return res.status(200).send({ artista });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro na busca' });
    }
});

router.post('/register', async (req, res) => {
    const { nome } = req.body;
    try {
        if (await Artista.findOne({ nome })) {
            return res.status(400).send({ error: 'Artista já esta cadastrado' })
        }
        const artista = await Artista.create(req.body);

        

        return res.send({ artista });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro no registro' });
    }
})

module.exports = app => app.use('/artista', router);