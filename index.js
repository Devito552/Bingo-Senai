const express = require('express');
const path = require('path');
const Bingo = require('./bingo');

const app = express();
const port = 3000;
const bingo = new Bingo();



app.get('/draw', (req, res) => {
    if (bingo.numbersDrawn.size >= 75) {
        res.json({ message: "Todos os números foram sorteados!", done: true });
    } else {
        const { column, number } = bingo.drawNumber();
        res.json({ column, number, done: false });
    }
});

app.get('/numbers', (req, res) => {
    res.json(Array.from(bingo.numbersDrawn).sort());
});

app.use(express.static(path.join(__dirname, './')));

// Rota para servir o arquivo HTML
app.get('/jogar', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
