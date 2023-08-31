// TODO: DB(mysql) 연결
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sesac',
});
// TODO: 모델 코드

exports.postSignup = (data, cb) => {
    const sql = `insert into user (userId, name, pw) values ('${data.userid}','${data.name}','${data.pw}')`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
    });
    cb();
};

exports.postSignin = (data, cb) => {
    const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }

        cb(rows);
    });
};

exports.postProfile = (userid, cb) => {
    const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }

        cb(rows);
    });
};

exports.editProfile = (data, cb) => {
    const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }

        cb();
    });
};

exports.deleteProfile = (id, cb) => {
    conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
        if (err) {
            throw err;
        }

        cb();
    });
};
