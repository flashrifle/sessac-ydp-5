const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer');
const upload = multer({
    dest: 'uploads/', // 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

app.set('view engine', 'ejs');
app.set('/view', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`${PORT} start `);
});
app.get('/', (req, res) => {
    res.render('index');
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userfile'): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
app.post('/upload', upload.single('userfile'), (req, res) => {
    // req.file : 파일 업로드 정보
    // req.body : 파일 외의 정보
    console.log(req.file);
    console.log(req.body);
    res.send(`<h1>Upload!</h1>`);
});
