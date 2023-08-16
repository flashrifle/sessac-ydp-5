const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어 ( middleware )
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어를 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 해석
app.use(express.json()); // json 형식으로 데이터를 주고 받는다

// 라우팅 - 주소설정
// GET '/' -> index.ejs를 보여줌
app.get('/', (req, res) => {
    // res.render('뷰경로', 데이터)
    res.render('quiz', { title: '폼 전송 연습' });
});

app.listen(PORT, () => {
    console.log(`${PORT} is opening!`);
});

//GET '/getFrom' => 임의의 메세지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/getForm', function (req, res) {
    console.log(req.query);
    // res.send('get 요청 성공');
    res.render('getResult', {
        title: 'GET',
        userInfo: req.query,
    });
});

app.post('/postForm', function (req, res) {
    console.log(req.body);
    // res.send('post 요청 성공');
    res.render('postResult', {
        title: 'POST',
        userInfo: req.body,
    });
});
