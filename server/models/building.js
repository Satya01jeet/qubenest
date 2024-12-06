const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    feature: { type: Array, required: true },
    rating: { type: String, required: true },
    type: {
        single: {
            price: {type: String, required: true},
            discountPrice: {type: String, required: true},
            discount: {type: String, required: true},
            security: {type: String, required: true},
        },
        double: {
            price: {type: String, required: true},
            discountPrice: {type: String, required: true},
            discount: {type: String, required: true},
            security: {type: String, required: true},
        }
    },
    reviews: {type: Number, required: true},
    bookingFee: {type: String, required: true},
    additional_info: {type: String, required: true},
});

module.exports = mongoose.model('Building',buildingSchema);