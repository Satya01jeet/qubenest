const express = require('express');
const { callbackReq, visitReq } = require('../controllers/userController');

const router = express.Router();

router.post('/callback', callbackReq);
router.post('/visit', visitReq);

module.exports = router;
