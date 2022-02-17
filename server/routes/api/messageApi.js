const { getAllMessages, createMessage, startConversation } = require('../../controllers/messageController');

const router = require('express').Router();

router
    .route('/')
    .post(startConversation)

router
    .route('/:id')
    .get(getAllMessages)
    // .post()
    .put(createMessage);

module.exports = router