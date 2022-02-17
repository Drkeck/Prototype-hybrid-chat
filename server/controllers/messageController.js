const { Conversation, User } = require('../models');

const MessageController = {

    getAllMessages({params}, res) {
        Conversation.findById(params.id)
            .then(dbMessageData => res.json(dbMessageData))
            .catch(err => console.log(err))
    },

    createMessage({params, body}, res) {
        console.log(params)
        Conversation.findByIdAndUpdate(params.id, {$push: {messages: {messageBody: body.body}}})
            .then(dbMessageData => {
                // console.log(dbMessageData)
                res.json(dbMessageData)})
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