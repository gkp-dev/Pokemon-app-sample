const pokemon = require('./routes/pokemon');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use('/pokemon', pokemon);



const port = process.env.PORT || 4242;
app.listen(port, () => {
    console.log(`My app listening on http://localhost:${port}...`)
})