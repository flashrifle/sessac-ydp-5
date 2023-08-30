// const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
    res.render('index');
};

// read all
exports.getVisitors = async (req, res) => {
    // [before]
    // Visitor.getVisitors((result) => {
    //   console.log('controller >>', result);
    //   res.render('visitor', { data: result });
    // });

    // [after]
    const result = await Visitor.findAll();
    console.log(result);
    res.render('visitor', { data: result });
};

// create
exports.postVisitor = async (req, res) => {
    // [before]
    // console.log(req.body); // { name: xx, comment: yy }
    // const { name, comment } = req.body;

    // Visitor.postVisitor(req.body, (insertId) => {
    //   console.log('controller >> ', insertId);
    //   res.send({ id: insertId, name: name, comment: comment });
    // });

    // [after]
    const { name, comment } = req.body;
    const result = await Visitor.create({
        name,
        comment,
    });
    // console.log(result); // create메서드가 실행된 결과 (== insert 한 데이터 값)
    res.send(result);
};

exports.deleteVisitor = async (req, res) => {
    // [before]
    // console.log(req.body);
    // const { id } = req.body;

    // Visitor.deleteVisitor(id, (result) => {
    //     console.log('controller >> ', result);
    //     res.send(result);
    // });
    const { id } = req.body;
    const result = await Visitor.destroy({
        where: { id: id },
    });
    res.send(true);
};

exports.getVisitor = async (req, res) => {
    // [before]
    // console.log(req.params);
    // const { id } = req.params;

    // Visitor.getVisitor(id, (result) => {
    //     console.log('controller >> ', result);
    //     res.send(result);
    // });

    // [after]
    const { id } = req.params;
    const result = await Visitor.findOne({
        where: { id: id },
    });
    res.send(result);
};

exports.updateVisitor = async (req, res) => {
    // [before]
    // console.log(req.body);
    // Visitor.updateVisitor(req.body, () => {
    //     res.send({ isUpdated: true });
    // });

    // [after]
    await Visitor.update(
        {
            name: req.body.name,
            comment: req.body.comment,
        },
        { where: { id: req.body.id } }
    );
    res.send({ isUpdated: true });
};
