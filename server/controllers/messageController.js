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

    startConversation: async ({body}, res) => {
        const convo = await Conversation.create(body)

        await User.findByIdAndUpdate({ _id: body.users[0]._id }, {$addToSet: { conversations: convo._id}})
            .then(dbMessageData => {
                console.log(dbMessageData)
                res.json(convo)}
                )
                .catch(err => err)
        
    }
}

module.exports = MessageController