// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가 왔다.' },
//         { id: 2, name: '이찬혁', comment: '으라차차' },
//     ];
// };

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'testuser',
    database: 'sesac',
});

exports.getVisitors = (cb) => {
    conn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('Visitor.js : ', rows);
        cb(rows);
    });
};

exports.postVisitor = (data, cb) => {
    //매개변수
    //data : 프론트에서 유저가 입력한 값
    //cb : query 실행 후 호출할 함수
    const { name, comment } = data;
    const sql = `INSERT INTO visitor VALUES (null, "${name}", "${comment}")`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('model > ', rows);
        cb(rows.insertId);
    });
};
