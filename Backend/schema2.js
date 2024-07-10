const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    }
});

const FirebaseUser = mongoose.model('FirebaseUser', userSchema);
module.exports = FirebaseUser;


