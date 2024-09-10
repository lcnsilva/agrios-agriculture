import express from 'express'
import conexaoDb from './config/db_connection.js'
import { config } from '@dotenvx/dotenvx';
config();

const PORT = 3001;
const app = express();

var db = await conexaoDb();
db.once("connected", () => {
    console.log("Conectado ao banco de dados.")
})

app.get('/', async (req, res) => {
    res.send("Funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});