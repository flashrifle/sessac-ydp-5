const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

const multer = require('multer');
const upload = multer({
    dest: 'uploads/', // 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

const uploadDetail = multer({
    // sotrage : 저장할 공간에 대한 정보
    storage: multer.diskStorage({
        destination(req, file, done) {
            // done: 콜백함수
            done(null, 'uploads/'); // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 파일의 "확장자"를 추출
            done(
                null,
                path.basename(file.originalname, ext) + Date.now() + ext
            );
        },
    }),
    // limits : 파일 제한 정보
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB,
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
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    // req.file : 파일 업로드 정보
    // req.body : 파일 외의 정보
    console.log(req.file);
    console.log(req.body);
    res.send(`<h1>Upload!</h1>`);
});

//
// {
//     fieldname: 'userfile',   : 폼에 정의한 name 값
//     originalname: 'IMG_0510.JPG', : 원본 파일명
//     encoding: '7bit',            : 파일 인코딩 타입
//     mimetype: 'image/jpeg',      : 파일 타입
//     destination: 'uploads/',     : 파일 저장 경로
//     filename: '1d960cf772a486bf6ceda15387882fd2', : 저장된 파일명
//     path: 'uploads/1d960cf772a486bf6ceda15387882fd2', : 업로드된 파일 전체 경로
//     size: 2615728 : 파일크기
//   }
