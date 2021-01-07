const { Router } = require('express');
const router = Router();
const pokedex = require('../data/pokedex.json');

router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (!pokedex[id]) {
        return res.status(404).json('The pokemon, you searched was not found...');
    }
    res.json(pokedex[req.params.id]);

})

router.get('/', (req, res) => {
    if (!pokedex) {
        return res.status(404).json('The list of pokemon was not found...');
    }
    res.json(pokedex);

})

module.exports = router;