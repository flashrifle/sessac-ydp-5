const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const wsServer = new ws.Server({ server }); // 웹 소켓 서버 접속

const sockets = []; // 클라이언트들을 저장할 배열

wsServer.on('connection', (socket) => {
    console.log('클라이언트가 연결되었습니다.');

    sockets.push(socket);

    // 클라이언트의 메세지 수신
    socket.on('message', (msg) => {
        console.log(`클라이언트로부터 받은 메세지 : ${msg}`);

        // 웹소켓 서버에 접속한 모든 클라이언트에게 메세지 전송
        // 브로드캐스팅(여러 컴퓨터에게 데이터를 전송)
        sockets.forEach((socket) => {
            socket.send(`${msg}`);
        });
    });

    socket.on('error', (err) => {
        console.log('오류가 발생했습니다.', err);
    });

    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료되었습니다.');
    });
});
