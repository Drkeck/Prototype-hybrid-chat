const mongoose = require('mongoose');

const { Schema } = mongoose;

const conversationSchema = new Schema({
    conversationId: mongoose.ObjectId,
    newMessage: Boolean,
})

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;