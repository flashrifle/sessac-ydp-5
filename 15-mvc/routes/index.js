// 모듈
// 경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// router.get('/', (req, res) => {
// res.render('index', {
//     title: 'MVC',
//     comment: comments,
// });
// });

// router.get('/comments', (req, res) => {
// res.render('comments', {
//     comments: comments,
// });
// });

// router.get('/comment/:id', (req, res) => {
// console.log(req.params);
// const cmtId = Number(req.params.id);
// // :id 변수에 0,7 같은 존재하지 않는 아이디로 접근시 404
// if (!comments[cmtId - 1]) return res.render('404');
// res.render('comment', { comment: comments[cmtId - 1] });
// });

// module.exports 구문을 통해 라우터를 내보내야
// 다른 모듈(파일)에서 router 객체를 사용가능함
module.exports = router;
