const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/view', 'views');
app.set('/static', 'static');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`${PORT} start `);
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'MVC',
        port: PORT,
        comment: comments,
    });
});

app.get('/comments', (req, res) => {
    res.render('comments', {
        comments: comments,
    });
});

app.get('/comment/:id', (req, res) => {
    console.log(req.params);
    const cmtId = Number(req.params.id);
    // :id 변수에 0,7 같은 존재하지 않는 아이디로 접근시 404
    if (!comments[cmtId - 1]) return res.render('404');
    res.render('comment', { comment: comments[cmtId - 1] });
});

app.get('/test/:id/:name', (req, res) => {
    console.log(req.params);
    res.send('test res success');
});
// 가장 마지막에 선언한다
app.get('*', (req, res) => {
    res.render('404');
});
// (임시) DB로부터 받아온 댓글 목록
const comments = [
    {
        id: 1,
        userid: 'helloworld',
        date: '2022-10-31',
        comment: '안녕하세요^~^',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2022-11-01',
        comment: '반가워유',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2022-11-02',
        comment: '오 신기하군',
    },
    {
        id: 4,
        userid: 'bestpart',
        date: '2022-11-02',
        comment: '첫 댓글입니당ㅎㅎ',
    },
];
