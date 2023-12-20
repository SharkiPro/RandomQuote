// app.js

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const { content: quote, author } = data;
        res.render('index', { quote, author });
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).send('Error fetching quote');
    }
});

app.listen(port, () => {
    console.log(`RandomQuote has started! \n http://localhost:${port}`);
});
