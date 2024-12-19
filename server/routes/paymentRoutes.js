const express = require('express');
const router = express.Router();
const {newPayment,checkStatus} = require('../controllers/paymentController');

router.post('/initiate', newPayment);
router.get('/verify/:transactionId', checkStatus);

module.exports = router;