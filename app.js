const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in middleware')
    next();
})

app.use((req, res) => {
    console.log('in next middleware')
    res.send('<h2>Hi there from Node Express JS test message</h2>')
})

const server = http.createServer(app);

server.listen(3000)