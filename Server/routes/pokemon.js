const { Router } = require('express');
const router = Router();
const pokedex = require('../data/pokedex.json');

router.get('/:id', async(req, res) => {

    await res.json(pokedex[req.params.id]);

})

router.get('/', (req, res) => {

    res.json(pokedex);

})

module.exports = router;