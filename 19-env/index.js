// const ps = process.env;

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = 8000;

app.get('/', (req, res) => {
    console.log(process.env.NAME);
    console.log(process.env.NODE);
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`${PORT} ${process.env.NAME} conn!`);
});
