require('dotenv').config();
const crypto =  require('crypto');
const axios = require('axios');

const salt_key = process.env.PHONEPE_SALT_KEY;
const merchant_id = process.env.PHONEPE_MERCHANT_ID

const generateTransactionId = () => {
    return `TX${Date.now()}${Math.floor(Math.random()*1000)}`; // 'TX' is a prefix just to indentify the string as transaction id
}

const newPayment = async (req, res) => {
    try {
        const merchantTransactionId = generateTransactionId();
        const data = {
            merchantId: merchant_id,
            merchantTransactionId: merchantTransactionId,
            merchantUserId: req.body.merchantUserId,
            // name: req.body.roomData.customerName,
            amount: req.body.amount * 100,
            redirectUrl: `https://qubenest.com/payment/verify/${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: req.body.roomData.customerNumber,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };
        console.log("ynha tk chl gya");
        const response = await axios.request(options);
        console.log(response);
        if (response?.data?.success) {
            return res.status(200).json({
                success: true,
                redirectUrl: response.data.data.instrumentResponse.redirectInfo.url,
                transactionId: merchantTransactionId
            });
        } else {
            return res.status(400).json({
                message: "Failed to initiate payment",
                success: false,
                details: response.data
            });
        }

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const checkStatus = async(req, res) => {
    const merchantTransactionId = res.req.body.transactionId
    const merchantId = res.req.body.merchantId

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
    method: 'GET',
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': `${merchantId}`
    }
    };

    // CHECK PAYMENT STATUS
    axios.request(options).then(async(response) => {
        if (response.data.success === true) {
            const url = `http://localhost:3000/success`
            return res.redirect(url)
        } else {
            const url = `http://localhost:3000/failure`
            return res.redirect(url)
        }
    })
    .catch((error) => {
        console.error(error);
    });
};

module.exports = {
    newPayment,
    checkStatus
}