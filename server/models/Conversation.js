const mongoose = require('mongoose');

const { Schema } = mongoose;

const conversationSchema = new Schema({
    newMessage: Boolean,
    messages:[{
        type: Schema.Types.ObjectId,
        ref: "Messages"
    }]
})

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;