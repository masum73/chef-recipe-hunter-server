const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipes are cooking')
});

app.listen(port, () => {
    console.log(`Recipes API is running on port: ${port}`)
})