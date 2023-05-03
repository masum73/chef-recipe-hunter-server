const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    console.log(chefs);
    res.send(chefs)
});

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(c => c.id === parseInt(id))
    //console.log(selectedChef);
    res.send(selectedChef)
});

// app.get('/chef/:chefId/recipe/:recipeId', (req, res) => {

//     const chefId = req.params.chefId;
//     const recipeId = req.params.recipeId;

//     const selectedChef = chefs.find(c => c.id === parseInt(chefId))
//     const recipes = selectedChef.recipes || []
//     const selectedRecipe = recipes.find(sr => sr.id === parseInt(recipeId))

//     console.log(selectedRecipe);
//     res.send(selectedRecipe)
// });


app.listen(port, () => {
    console.log(`Recipes API is running on port: ${port}`)
})