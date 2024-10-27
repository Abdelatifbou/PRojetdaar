const express = require("express");
const router = express.Router();
const axios = require('axios');
const { POKEMONURL } = require('../utils/index')

router.get('/getSets', async (req, res) => {
    try {

        const response = await axios.get(`${POKEMONURL}/sets`);
        const data = response.data;
        const sets = data.data.slice(0, 12);

        res.send(sets);

    } catch (err) {
        res.send(err)
    }
});

router.get('/getSet/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const response = await axios.get(`${POKEMONURL}/sets/${id}`);
        const data = response.data;
        res.send(data);

    } catch (err) {
        console.error('Erreur lors de la récupération du Set by id : ', err);
        res.send(err)
    }
});

router.get('/getSetCards/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const response = await axios.get(`${POKEMONURL}/cards?q=set.id:${id}`);
        const data = response.data;

        let REP = [{}];
        REP = [];
        //Filtrer la reponse
        data.data.forEach((card) => {
            REP.push({
                "id": card.id,
                "number": card.number,
                "image": card.images.large,
                "setId": card.set.id,
            })
        });

        res.send(REP);

    } catch (err) {
        console.error('Erreur lors de la récupération du getSetCards by id - ', err);
        res.send(err)
    }
});

module.exports = router