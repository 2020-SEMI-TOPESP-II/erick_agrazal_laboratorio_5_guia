const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connectDb = require('./dbConfig');

const PORT = 3000;


const ESTUDIANTES = [
    {
        nombre: "Erick Agrazal",
        edad: 29,
    },
    {
        nombre: "Zianni Pitti",
        edad: 22
    }
];


// Intermediarios
app.use(bodyParser.json());


// Controladores
app.get('/api/estudiantes/', (req, res) => {
    res.json({
        estudiantes: ESTUDIANTES,
        cantidad: ESTUDIANTES.length
    });
});
app.post('/api/estudiantes/', (req, res) => {
    const { nombre, edad } = req.body;
    ESTUDIANTES.push({ nombre, edad });
    res.json({ nombre, edad });
});
app.get('/api/estudiantes/:id', (req, res) => {
    res.json(ESTUDIANTES[req.params.id]);
});

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Ejecutando en el puerto ${PORT}`);
    });
});