const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);
const PORT = 8000;

const nickObjs = {}; // {socket.id : nick1}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('chat');
});

function updateList() {
    io.emit('updateNicks', nickObjs);
}

// io.on(): socket 관련 통신 작업을 처리
io.on('connection', (socket) => {
    // connection 이벤트는 클라이언트가 접속했을 때 발생
    // 콜백 함수 인자로 socket 객체를 제공
    console.log('서버 연결 완료 : ', socket.id);
    // // [실습1]
    // socket.on('hello', (data) => {
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('helloKr', { who: 'hello', msg: '안녕' });
    // });

    // [실습3] 채팅창 입장 안내 문구
    // io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);

    // emit() from server
    // - socket.emit(event_name, data) : 해당 클라이언트에게만 전달
    // - io.emit(event_name, data) : 접속한 모든 클라이언트에게 전달
    // [실습3-2]
    socket.on('setNick', (name) => {
        console.log(`닉네임 설정 완료 :: ${name} 님 입장`);

        // 프론트에서 입력한 nick이 nickObj 객체에 존재하는지 검사
        const nameCheck = Object.values(nickObjs).indexOf(name);

        if (nameCheck > -1) {
            // 존재하면: err 이벤트 + '이미 존재하는 닉네임 입니다'
            socket.emit('error', '이미 존재 하는 닉네임 입니다.');
        } else {
            // 새닉네임: notice 이벤트
            nickObjs[socket.id] = name;
            console.log('접속 유저 목록 : ', nickObjs);
            io.emit('notice', `${name} 님이 입장하셨습니다.`);
            socket.emit('entrySuccess', name);
            updateList();
        }
    });

    // [실습3-3] 클라이언트 퇴장
    socket.on('disconnect', () => {
        console.log(`${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);
        io.emit('notice', `${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);
        delete nickObjs[socket.id];
        updateList();
    });

    // [실습4] 채팅창 전송 Step1
    socket.on('send', (msg) => {
        if (msg.receiver === 'all') {
            console.log('전체보내기 : ', msg);
            io.emit('newMessage', msg);
        } else {
            console.log('귓속말 : ', msg.receiver, msg);
            io.to(msg.receiver).emit('dm', msg);
        }
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
