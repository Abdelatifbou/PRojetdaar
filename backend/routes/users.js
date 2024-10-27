const express = require("express");
const router = express.Router();
const { getOwners } = require('../../contracts/connectors/Accounts')
const { getNFTsOfOwner } = require('../../contracts/connectors/tokens')

router.get('/getUsers', async (req, res) => {
    try {
        const users = await getOwners();
        res.json(users);
    } catch (err) {
        console.error('Erreur lors de la récupération des Users', err);
        res.send(err)
    }
}
);

router.get('/getUserNFTs/:id', async (req, res) => {
    try {
        const adress = req.params.id;

        const userNFTs = await getNFTsOfOwner(adress);
        res.json(userNFTs);

    } catch (err) {
        console.error('Erreur lors de la récupération des UserNFTs', err);
        res.send(err)
    }
});

module.exports = router;