const e = require('express');
const express = require('express');
const res = require('express/lib/response');
const port = 3000;
const server = express();
server.get('/makers/:nombre?', function (request, response) {
    const { nombre } = request.params;
    response.send(`<h1>Hola ${nombre[0].toUpperCase() + nombre.slice(1)}!</h1>`);
});
server.listen(port, function () {
    console.log(`http://localhost:${port}/makers/juan`)
});