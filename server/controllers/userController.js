const { User } = require('../models');

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
        // having a hard time figuring this one out
    }
}

module.exports = UserController