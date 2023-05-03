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


app.listen(port, () => {
    console.log(`Recipes API is running on port: ${port}`)
})