const express = require("express");
const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/teach', (req, res) => {
    res.render('index.html');
});

app.get('/study', (req, res) => {
    res.render('study.html');
});

app.listen(PORT);
