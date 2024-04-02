# Comandos para que funcione el back
* npm init -y
* npm install pg
* npm i express
* npm install nodemon
* npm i cors

* Poder ver negocios y buscar negocios
* Añadir a la base el usuario (crear cuenta)
* iniciar sesión

const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Hello World");
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});

