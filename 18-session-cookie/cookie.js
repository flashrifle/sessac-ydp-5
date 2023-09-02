const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// 미들웨어 등록
// app.use(cookieParser()); 일반 쿠키
const COOKIE_SECRET_KEY = 'hello~~';
app.use(cookieParser(COOKIE_SECRET_KEY)); // 암호화 쿠키
const myCookieConf = {
    // 웹 서버를 통해서만 쿠키 접근이 가능
    httpOnly: true,
    // maxAge : 쿠키 수명
    maxAge: 20 * 1000, // 1m
    signed: true, // 암호화 쿠키옵션
};

app.get('/', (req, res) => {
    res.render('cookie');
});

app.get('/setCookie', (req, res) => {
    // res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션)
    res.cookie('myCookie', 'myValue', myCookieConf);

    res.send('쿠키 설정 완료');
});

app.get('/getCookie', (req, res) => {
    // res.send(req.cookies); // 일반 쿠키
    res.send(req.signedCookies); // 암호화 쿠키
});

app.get('/clearCookie', (req, res) => {
    res.clearCookie('myCookie', 'myValue', myCookieConf);
    res.send('쿠키 삭제 완료');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
