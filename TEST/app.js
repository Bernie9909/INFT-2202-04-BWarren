const express = require('express');
const pug = require('pug');
const student = require('/')

// inialize method 
const app = express();

// configure routes
app.use('/', student);

// Setup template emgine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res => {
    res.render('./pages/home', {
        pageTitle: "INFT 2202 - HOME"
    })
}));

// listen on port 
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})