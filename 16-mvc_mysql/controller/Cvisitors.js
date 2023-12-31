const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {
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

exports.getVisitor = (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    Visitor.getVisitor(id, (result) => {
        console.log('controller >> ', result);
        res.send(result);
    });
};

exports.updateVisitor = (req, res) => {
    console.log(req.body);
    Visitor.updateVisitor(req.body, () => {
        res.send({ isUpdated: true });
    });
};
