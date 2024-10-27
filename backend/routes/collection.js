const express = require("express");
const router = express.Router();
const axios = require('axios');
const { POKEMONURL } = require('../utils/index')


router.get('/getCards', async (req, res) => {
    try {
        const response = await axios.get(`${POKEMONURL}/cards`);
        const data = response.data;

        let REP = [{}];
        REP = [];
        //Filtrer la reponse
        data.data.forEach((card) => {
            REP.push({
                "id": card.id,
                "number": card.number,
                "image": card.images.large,
                "name": card.name,
                "set": card.set.name
            })
        });

        res.send(REP);
    } catch (err) {
        console.error('Erreur lors de la récupération des Cards', err);
        res.send(err)
    }
});


router.get('/getCard/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const response = await axios.get(`${POKEMONURL}/cards/${id}`);
        const data = response.data;

        res.send({
            "id": data.data.id,
            "number": data.data.number,
            "image": data.data.images.large
        });
    } catch (err) {
        console.error('Erreur lors de la récupération du Card by id :', err);
        res.send(err)
    }
});

module.exports = router