const { Messages, Conversation } = require('../models');

const MessageController = {
    getAllMessages(req, res) {
        Messages.find({})
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => console.log(err))
    },
    createMessage({body}, res) {
        Messages.create(body)
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => console.log(err))
    },
    startConversation({body}, res) {
        Conversation.create(body)
            .then(dbConversationData => res.json(dbConversationData))
            .catch(err => console.log(err))
    }
}

module.exports = MessageController