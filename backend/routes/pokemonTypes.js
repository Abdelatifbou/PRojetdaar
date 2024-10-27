const express = require("express");
const router = express.Router();
const axios = require('axios');
const { POKEMONURL } = require('../utils/index')

router.get('/getTypes', async (req, res) => {
    try {

        const response = await axios.get(`${POKEMONURL}/types`);
        const data = response.data;
        res.send(data);

    } catch (err) {
        console.error('Erreur lors de la récupération des Types : ', err);
        res.send(err)
    }
});
router.get('/getSubTypes', async (req, res) => {
    try {

        const response = await axios.get(`${POKEMONURL}/subtypes`);
        const data = response.data;
        res.send(data);

    } catch (err) {
        console.error('Erreur lors de la récupération des SubTypes : ', err);
        res.send(err)
    }
});
router.get('/getSuperTypes', async (req, res) => {
    try {

        const response = await axios.get(`${POKEMONURL}/supertypes`);
        const data = response.data;
        res.send(data);

    } catch (err) {
        console.error('Erreur lors de la récupération des SuperTypes : ', err);
        res.send(err)
    }
});
router.get('/getRarities', async (req, res) => {
    try {

        const response = await axios.get(`${POKEMONURL}/rarities`);
        const data = response.data;
        res.send(data);

    } catch (err) {
        console.error('Erreur lors de la récupération des Rarities : ', err);
        res.send(err)
    }
});

module.exports = router;