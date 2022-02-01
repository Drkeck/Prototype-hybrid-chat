const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/messaging');

module.exports = mongoose.connection