// http 모듈로 웹서버 생성하기

const http = require('http');
const fs = require('fs'); // 파일관련 내장 모듈
const server = http.createServer(function (request, response) {
    // response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); // 응답헤더
    // response.write('<h1>hello, Node.js!</h1>'); // 응답 본문
    // response.end('<p>My first Node Server 갸갸갹</p>'); // 응답 본문 작성 후 응답 종료

    // html파일 불러오기
    try {
        const data = fs.readFileSync('./index2.html');
        response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        response.write(data);
        response.end();
    } catch (err) {
        const error = fs.readFileSync('./404.html');
        console.log(err);
        response.writeHead(404), { 'content-type': 'text/html; charset=utf-8' };
        response.write(error);
        response.end();
    }
});

const PORT = 8000;

server.on('connection', function (req, res) {
    console.log('connection 이벤트 발생');
});

// 서버실행
server.listen(PORT, function () {
    console.log(`server listening on ${PORT} port`);
});

// setTimeout(function () {
//     console.log('10초가 지나 서버가 종료 되었습니다.');
//     server.close();
// }, 10000);
