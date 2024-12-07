const paymentGateway = require('../models/payments/PaymentGateway');
const Booking = require('../models/booking');

const gateway = new paymentGateway(
    process.env.PHONEPE_MERCHANT_ID,
    process.env.PHONEPE_SALT_KEY,
    process.env.PHONEPE_ENVIRONMENT || 'sandbox'
)

const initiatePayment = async (req,res) => {
    const {amount,merchantUserId} = req.body;
    try{
        const {transactionId, paymentUrl} = await gateway.initiatePayment(amount,merchantUserId);
        console.log(transactionId, paymentUrl);
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

const verifyPayment = async (req, res) => {
    const { transactionId } = req.params;
    try {
        const status = await gateway.verifyPaymentStatus(transactionId);

        if (status.code === 'PAYMENT_SUCCESS') { 
            const booking = new Booking({
                paymentId: transactionId,
                roomType: req.body.roomType,
                buildingName: req.body.buildingName,
                roomTitle: req.body.roomTitle,
                customerName: req.body.customerName,
                customerNumber: req.body.customerNumber,
                customerEmail: req.body.customerEmail,
                amount: req.body.amount,
                status: 'success',
            });

            await booking.save(); // Save booking details
            res.status(200).json({ success: true, message: 'Payment verified and booking saved!', booking });
        } else {
            res.status(400).json({ success: false, message: 'Payment verification failed', status });
        }
    } catch (error) {
        console.error('Error verifying status: ', error);
        res.status(500).json({ success: false, message: 'Payment verification failed', error: error.message });
    }
};


module.exports = {initiatePayment,verifyPayment}