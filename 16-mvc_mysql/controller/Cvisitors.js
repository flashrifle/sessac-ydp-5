const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitor = (req, res) => {
    // console.log(Visitor.getVisitors());
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js : ', result);
        res.render('visitor', {
            data: result,
        });
    });
};

exports.postVisitor = (req, res) => {
    console.log(req.body);

    const { name, comment } = req.body;

    Visitor.postVisitor(req.body, (insertId) => {
        console.log('controller >> ', insertId);
        res.send({
            id: insertId,
            name: name,
            comment: comment,
        });
    });
};

exports.deleteVisitor = (req, res) => {
    console.log(req.body);
    const { id } = req.body;

    Visitor.deleteVisitor(id, (result) => {
        console.log('controller >> ', result);
        res.send(result);
    });
};
