const mongoose = require('mongoose');
const messageSchema = require('./message');

const { Schema } = mongoose;

const conversationSchema = new Schema({
    newMessage: Boolean,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages:[messageSchema],
    updateDate: { type: Date, default: Date.now }
})

const Conversation = mongoose.model('Conversations', conversationSchema)

module.exports = Conversation;