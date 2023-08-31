const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
app.get('/user', (req, res) => {
    res.render('index');
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

// TODO: 404 에러 처리
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`${PORT} start `);
});