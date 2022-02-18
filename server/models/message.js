const mongoose = require('mongoose');

const { Schema } = mongoose

const messageSchema = new Schema({
    messageBody: {
        type: String,
        required: true
    },
    timeSent: {
        type: Date,
        default: Date.now
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = messageSchema