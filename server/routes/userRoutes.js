const express = require('express');
const { callbackReq } = require('../controllers/userController');

const router = express.Router();

router.post('/callback', callbackReq);

module.exports = router;
