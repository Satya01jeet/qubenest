const crypto = require('crypto');
const axios = require('axios');

class PhonePePaymentGateway{
    constructor(merchantId, apiKey, saltKey, environment = 'sandbox') {
        this.merchantId = merchantId,
        this.saltKey = saltKey,
        this.baseUrl = environment === 'production' ? 'https://api.phonepe.com/v1' : 'https://api-preprod.phonepe.com/v1';
    }
    
    // Generates a unique transaction id using current date and 3-digit random number
    generateTransactionId() {
        return `TX${Date.now()}${Math.floor(Math.random()*1000)}`; // 'TX' is a prefix just to indentify the string as transaction id
    }

    // Payment Payload
    createPaymentPayload(amount, merchantUserId, transactionId) {
        const redirectUrl = `https://localhost:3000/payment/verify/${transactionId}`
        return {
            merchantId: this.merchantId,
            merchantTransactionId: transactionId,
            merchantUserId: merchantUserId,
            amount: amount*100, // converting into paise 
            redirectUrl: redirectUrl,
            redirectMode: 'POST',
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };
    }

    // Generate checksums for payment
    generateChecksum(payload) {
        const jsonPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
        const checksumString = `${jsonPayload}/pg/v1/pay/${this.saltKey}`;

        return crypto.createHash('sha256').update(checksumString).digest('hex') + '###1';
    }

    // Initiate Payment
    async initiatePayment(amount, merchantUserId) {
        try {
            const transctionId = this.generateTransactionId();
            const payload = this.createPaymentPayload(amount,merchantUserId,transctionId);
            const checksum = this.generateChecksum(payload);
            const response = await axios.post(
                `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay`,
                {
                    request: Buffer.from(JSON.stringify(payload)).toString('base64')
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-verify': checksum
                    }
                }
            );
            return {
                transctionId: transctionId,
                paymentUrl: response.data.data.instrumentResponse.redirectInfo.url
            }
        } catch(error) {
            console.error('Payment initiation failed: ',error);
            throw error;
        }
    }

    // Verify payment status
    async verifyPaymentStatus(merchantTransactionId) {
        try{
            const checksum = crypto.createHash('sha256').update(`pg/v1/status/${this.merchantId}/${merchantTransactionId}/${this.saltKey}`).digest('hex')+'###1';
            const response = await axios.get(
                `${this.baseUrl}/pg/v1/status/${this.merchantId}/${merchantTransactionId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-verify': checksum,
                        'X-MERCHANT-ID': this.merchantId
                    }
                }
            )
            return response.data;
        }catch(error){
            console.error('Payment status check failed: ', error);
            throw error;
        }
    }
}

module.exports = PhonePePaymentGateway;