const mongoose = require('mongoose');
const { Conversation } = require('.');

const { Schema } = mongoose

const messageSchema = new Schema({
    conversation: [Conversation.schema],
    messageBody: {
        type: String,
        required: true
    },
    timeSent: {
        type: Date,
        default: Date.now
    },

})