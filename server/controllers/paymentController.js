const paymentGateway = require('../models/payments/PaymentGateway');

const gateway = new paymentGateway(
    process.env.PHONEPE_MERCHANT_ID, 
    process.env.PHONEPE_API_KEY,
    process.env.PHONEPE_SALT_KEY,
    process.env.PHONEPE_ENVIRONMENT || 'sandbox'
)

const initiatePayment = async (req,res) => {
    const {amount,redirectUrl} = req.body;
    try{
        const {transactionId, paymentUrl} = await gateway.initiatePayment(amount,redirectUrl);
        res.status(200).json({
            success: true,
            transactionId,
            paymentUrl
        })
    } catch(error) {
        console.error('Error initiating payment', error);
        res.status(500).json({
            success: false,
            message: 'Payment initiation failed',
            error: error.message
        })
    }
}

const verifyPayment = async (req,res) => {
    const {transactionId} = req.params;
    try{
        const status = await gateway.verifyPaymentStatus(transactionId);
        req.status(200).json({
            success: true,
            status
        })
    } catch(error) {
        console.error('Error verifying status: ', error);
        res.status(500).json({
            success: false,
            message: 'Payment verification failed',
            error: error.message,
        })
    }
}

module.exports = {initiatePayment,verifyPayment}