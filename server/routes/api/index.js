const router = require('express').Router();
const userRoutes = require('./userApi');
const messageRoutes = require('./messageApi');

router.use('/user', userRoutes);
router.use('/messages', messageRoutes)

module.exports = router