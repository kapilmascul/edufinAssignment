const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: String,
    userType: {
        type: String,
        enum: ["Admin", "Manager", "Developer"],
        required: true
    },

});


UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel
}