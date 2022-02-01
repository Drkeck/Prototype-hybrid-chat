const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/messaging', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
});

module.exports = mongoose.connection