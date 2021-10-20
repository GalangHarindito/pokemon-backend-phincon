var express = require('express');
var router = express.Router();
const pokemon = require('../controllers/pokemon')

// Registration account
router.post("/catch", pokemon.catch);
router.post("/store", pokemon.storePokemon)
router.get("/mylist", pokemon.findAll)

module.exports = router;