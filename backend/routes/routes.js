const users = require("./users")
const collection = require("./collection")
const pokemonTypes = require("./pokemonTypes")
const pokemonSet = require("./pokemonSet")

module.exports = function (app) {
    app.use("/", users);
    app.use("/", collection)
    app.use("/", pokemonTypes)
    app.use("/", pokemonSet)
};