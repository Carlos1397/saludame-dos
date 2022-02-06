const express = require('express');
const res = require('express/lib/response');
const port = 3000;
const server = express();
server.get('/makers/:nombre?', function (request, response) {
    const { nombre } = request.params
    const name = nombre.charAt(0).toUpperCase() + nombre.substring(1);
    response.send(`<h1>Hola ${name}!</h1>`);
});
server.listen(port, function () {
    console.log(`http://localhost:${port}/makers/juan`)
});