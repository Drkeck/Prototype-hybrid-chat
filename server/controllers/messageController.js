const { Conversation, User } = require('../models');

const MessageController = {

    getAllMessages({_id}, res) {
        Conversation.findById(_id)
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => console.log(err))
    },

    createMessage({body}, res) {
        Conversation.findByIdAndUpdate(body._id, {$push: {messages: {messageBody: body.body, timeSent: Date.now}}})
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => console.log(err))
    },

    startConversation({body}, res) {
        Conversation.create(body)
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => console.log(err));
        User.findByIdAndUpdate()
    }
}

module.exports = MessageController