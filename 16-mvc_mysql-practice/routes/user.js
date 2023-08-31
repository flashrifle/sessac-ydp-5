// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/UserController');
const router = express.Router();

router.get('/signup', controller.signup);
router.post('/signup', controller.postSignup);

router.get('/signin', controller.signin);
router.post('/signin', controller.postSignin);

router.post('/profile', controller.postProfile);
router.post('/profile/edit', controller.editProfile);
router.post('/profile/delete', controller.deleteProfile);

module.exports = router;
