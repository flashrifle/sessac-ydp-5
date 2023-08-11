const express = require('express');
const app = express();
const PORT = 8000;

// express 템플릿 엔진 종류를(ejs) 등록
app.set('view engine', 'ejs');
// 템플릿 엔진 파일을 정할 경로
app.set('views', './views');

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// '/' 서버주소:포트번호 / (localhost:8000/)
// app.get('/', function (req, res) {
//     // res.send(x);: x를 클라이언트에게 응답을 보냄
//     // res.send('hello express');
//     // res.render(ejs_filename) : ejs 파일 이름을 찾아서 응답
//     res.render('index');
// });

// (임시) DB에서 가져온 회원정보 (id, pw)
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

app.get('/', function (req, res) {
    res.render('index', {
        userId: idFromDB,
        userPw: pwFromDB,
        btns: ['버튼1', '버튼2', '버튼3'],
        me: {
            name: 'jm',
            msg: ' ㅎㅇㅎㅇㅎㅇㅎㅇ',
        },
        isLogin: false,
    });
});

// '/sesac' 경로로 들어왔을 때 "새싹 영등포 캠퍼스 5기 수업중" 메세지 보이기
app.get('/sesac', function (req, res) {
    res.send('<h1>새싹 영등포 캠퍼스 5기 수업중</h1>');
});

// 퀴즈
// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get('/login', function (req, res) {
    res.render('login');
});
// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (req, res) {
    res.render('register');
});
// 서버거 실행할 PORT 지정, 실행했을 때  콘솔로그를 찍음
app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}! http://localhost${PORT}`);
});
