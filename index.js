const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    console.log(chefs);
    res.send(chefs)
});

app.listen(port, () => {
    console.log(`Recipes API is running on port: ${port}`)
})