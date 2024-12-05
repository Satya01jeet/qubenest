const express = require('express');
const router = express.Router();
const {initiatePayment,verifyPayment} = require('../controllers/paymentController');

router.get('/',(req,res)=>{
    res.json('welcome to checkoutpage')
})
router.post('/initiate', initiatePayment);
router.get('/verify/:transactionId', verifyPayment);

module.exports = router;