const express = require('express');
const app = express();
const coffee = require('./coffee.json')
const bakery = require('./bakery.json')

const port = 3000;
// use template engine
app.set('view engine', 'ejs');
app.set('views', './views');
// use middleware
app.use(express.static('public'));

// routes
app.get('/coffee', (req, res) => {
    res.render('txantiloi', { title: 'Coffee Items', items: coffee });
});

// routes
app.get('/bakery', (req, res) => {
    res.render('txantiloi', { title: 'Bakery Items', items: bakery });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));