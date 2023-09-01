const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의

router.get('/', controller.index);

router.get('/players', controller.getPlayers);

//get /players/:player_id - 특정 선수 조회
router.get('/players/:player_id', controller.getPlayer);
router.post('/players', controller.postPlayer);
router.patch('/players/:player_id/team', controller.patchPlayer);
router.delete('/players/:player_id', controller.deletePlayer);

router.get('/teams', controller.getTeams);
router.get('/teams/:team_id', controller.getTeam);
router.get('/teams/:team_id/players', controller.getTeamPlayers);

module.exports = router;
