const Comment = require('../model/Comment');

exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req, res) => {
    res.render('comments', {
        comments: Comment.getCommentAll(),
    });
};

exports.comment = (req, res) => {
    console.log(req.params);
    const cmtId = Number(req.params.id);
    const comments = Comment.getCommentAll();
    // :id 변수에 0,7 같은 존재하지 않는 아이디로 접근시 404
    if (!comments[cmtId - 1]) return res.render('404');
    res.render('comment', { comment: comments[cmtId - 1] });
};
