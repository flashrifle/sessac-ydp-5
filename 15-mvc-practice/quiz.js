const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/view', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes');
app.use('/', indexRouter);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`${PORT} start `);
});
