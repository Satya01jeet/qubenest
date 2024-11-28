const mongoose = requiere('mongoose');

const user = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: Number, required: true},
    email: {type: String, required: true},
})

module.export = mongoose.model('User', userSchema);