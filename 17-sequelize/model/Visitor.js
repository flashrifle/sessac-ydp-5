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
    conn.query('SELECT * FROM visitor order by id desc', (err, rows) => {
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

exports.deleteVisitor = (id, cb) => {
    console.log('model >>', id);

    conn.query(`delete from visitor where id=${id}`, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('model >>', rows);
        cb(true);
    });
};

exports.getVisitor = (id, cb) => {
    console.log('model >>', id);

    conn.query(`select * from visitor where id=${id}`, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('model >>', rows);
        cb(rows[0]); // [{}] -> {}
    });
};

exports.updateVisitor = (updateData, cb) => {
    const { id, name, comment } = updateData;
    const sql = `update visitor set name='${name}', comment='${comment}' where id=${id}`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('model >>', rows);
        cb();
    });
};
