const User = require('../model/User');

exports.main = (req, res) => {
    res.render('dynamicQuiz', {
        title: '동적 폼 전송',
    });
};

exports.getAxios = (req, res) => {
    res.send(req.query);
};

exports.postAxios = (req, res) => {
    res.send(res.body);
};
