const e = require('express');
const express = require('express');
const res = require('express/lib/response');
const port = 3000;
const server = express();
server.get('/makers/:nombre?', function (request, response) {
    const { nombre } = request.params;
    response.send(`<h1>Hola ${nombre[0].toUpperCase() + nombre.slice(1)}!</h1>`);
});
app.get("/makers/:name", (req, res) => {
    let name = req.params.name;
    name = name.replace(/^\w/, c => c.toUpperCase());

    res.send(`<h1>Hola ${name}!</h1>`);
});

server.listen(port, function () {
    console.log(`http://localhost:${port}/makers/juan`)
});