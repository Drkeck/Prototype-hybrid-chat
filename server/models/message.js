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
});

module.exports = messageSchema