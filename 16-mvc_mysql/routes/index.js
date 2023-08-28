const express = require('express');
const controller = require('../controller/Cvisitors');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitor);
router.post('/visitor', controller.postVisitor);

module.exports = router;
