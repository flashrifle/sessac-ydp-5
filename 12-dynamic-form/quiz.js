const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/view', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`${PORT} start `);
});

app.get('/', (req, res) => {
    res.render('dynamicQuiz', {
        title: 'dynamic ejs 실습',
        port: PORT,
    });
});

app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(res.query);
});

app.post('/axios', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
