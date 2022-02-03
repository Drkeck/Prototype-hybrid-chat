const router = require('express').Router();
const userRoutes = require('./userApi');

router.use('/user', userRoutes);

module.exports = router