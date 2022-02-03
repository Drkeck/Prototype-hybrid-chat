const router = require('express').Router();
const { getAllUsers, createUser, deleteUser, getUserById} = require('../../controllers');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser);

module.exports = router