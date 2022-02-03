const { Messages } = require('../models');

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
    }
}

module.exports = MessageController