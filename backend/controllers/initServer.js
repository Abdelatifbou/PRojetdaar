const cors = require('cors');
const express = require('express');
const { fetchAndCreateNFTCollection } = require("../../contracts/connectors/Collections")

function initServer(app) {
    app.use(cors()); // enable CORS for all requests
    app.use(express.json()); // enable parsing JSON bodies

    fetchAndCreateNFTCollection();


    require("../routes/routes")(app); // init the routes
}

module.exports = initServer;