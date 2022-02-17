const mongoose = require('mongoose');

const { Schema } = mongoose;

const conversationSchema = new Schema({
    newMessage: Boolean,
    user1: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user2: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    messages:[{
        type: Schema.Types.ObjectId,
        ref: "Messages"
    }]
})

module.exports = conversationSchema;