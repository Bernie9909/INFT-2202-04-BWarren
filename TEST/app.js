// const express = require('express');
// const pug = require('pug');

// //port 
// const port = 3000;

// // inialize method 
// const app = express();

// // Setup template emgine
// app.set('views', __dirname + '/views');
// app.set('view engine', 'pug');

// // Templating with pug?
// app.get("/", function (req, res) {
//     res.render("index", {
//         title: "INFT 2022 - working with node and pug",
//         firstName: "Sally"
//     });
// });

const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(3000);