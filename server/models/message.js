const mongoose = require('mongoose');
const { Conversation, User } = require('.');

const { Schema } = mongoose

const messageSchema = new Schema({
    conversation: Conversation.schema,
    from: User.schema,
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