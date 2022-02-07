const mongoose = require('mongoose');
// const { Conversation } = require('.');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    conversations: [{
        type: Schema.Types.ObjectId,
        ref: 'Conversation'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;