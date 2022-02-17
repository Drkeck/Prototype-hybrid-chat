const { User, Conversation } = require('../models');

const UserController = {
    getAllUsers(req,res) {
        User.find({})
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => {
                console.log(err);
            })
    },

    getUserById({params},res) {
        User.findOne({_id: params.id})
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => {
                console.log(err);
            })
    },

    createUser({body}, res) {
        User.create(body)
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => {
                console.log(err);
            })
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({_id: params.id})
            .then(dbUsersData => {
                if(!dbUsersData) {
                    res.status(404).json({ message: 'no user was found with this id'});
                    return;
                }

                res.json(dbUsersData)
            })
            .catch(err => console.log(err))
    },

    startConversation({body}, res) {
        Conversation.create(body)
        .then(dbConvoData => {
            User.findOneAndUpdate(body.targetId, { $addToSet: { conversations: body._id }})
            User.findByIdAndUpdate(body.userId, { $addToSet: { conversations: body._id }})
            res.json(dbConvoData);
            return
        })
        .catch(err => console.log(err))

    }
}

module.exports = UserController