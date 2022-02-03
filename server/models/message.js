const mongoose = require('mongoose');
const { Conversation, User } = require('.');

const { Schema } = mongoose

const messageSchema = new Schema({
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    messageBody: {
        type: String,
        required: true
    },
    timeSent: {
        type: Date,
        default: Date.now
    },
});

const Messages = mongoose.model('Messages', messageSchema);

module.exports = Messages