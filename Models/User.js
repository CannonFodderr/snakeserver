const {Schema, model} = require('mongoose');


const UserSchema = new Schema({
    name: { type: String, required: true, default: "Player 1"},
    score: { type: String, required: true, default: 0}
});

const User = model('User', UserSchema);

module.exports = User;