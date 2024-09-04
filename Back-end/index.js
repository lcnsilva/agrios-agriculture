const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(":)");
});

app.listen(3001, () => {
    console.log('Servidor rodando em: http://localhost:3001');
});