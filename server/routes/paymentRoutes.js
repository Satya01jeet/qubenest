const express = require('express');
const router = express.Router();
const {newPayment,checkStatus} = require('../controllers/paymentController');

router.post('/initiate', newPayment);
router.post('/verify/:transactionId', checkStatus);

module.exports = router;