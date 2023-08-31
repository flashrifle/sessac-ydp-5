// TODO: 컨트롤러 코드
// const User = require('../model/User');
const { User, Sequelize } = require('../models'); // ../models/index.js
const Op = Sequelize.Op;

exports.signup = (req, res) => {
    res.render('signup');
};

exports.postSignup = async (req, res) => {
    // User.postSignup(req.body, () => {
    //     res.end();
    // });
    console.log(req.body);
    const result = await User.create({
        userId: req.body.userid,
        pw: req.body.pw,
        name: req.body.name,
    });
    res.send(result);
    console.log('result', result);
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.postSignin = async (req, res) => {
    // User.postSignin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.send(true);
    //     } else {
    //         res.send(false);
    //     }
    // });
    const result = await User.findOne({
        where: {
            [Op.and]: [{ userId: req.body.userid }, { pw: req.body.pw }],
        },
    });
    res.send(result);
};

exports.postProfile = async (req, res) => {
    // User.postProfile(req.body.userid, (result) => {
    //     res.render('profile', { data: result[0] });
    // });

    const result = await User.findOne({
        where: {
            userId: req.body.userid,
        },
    });
    res.render('profile', { data: result });
};

exports.editProfile = async (req, res) => {
    // User.editProfile(req.body, () => {
    //     res.send(true);
    // });
    const result = await User.update(
        {
            userId: req.body.userid,
            pw: req.body.pw,
            name: req.body.name,
        },
        { where: { id: req.body.id } }
    );
    res.send(true);
};

exports.deleteProfile = async (req, res) => {
    // User.deleteProfile(req.body.id, () => {
    //     res.send(true);
    // });
    const result = await User.destroy({
        where: { id: req.body.id },
    });
    res.send(true);
};
