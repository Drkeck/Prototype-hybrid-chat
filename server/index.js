const express = require('express');
const app = express();
const httpServer = require("http").createServer(app)
const options = {}
const io = require("socket.io")(httpServer, options)

const path = require('path');

const db = require('./config/connection.js')

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

io.on("connection", socket => {})

db.once('open', () => {
    httpServer.listen(PORT, () => {
        console.log(`Backend Server running on ${PORT}! https://localhost:${PORT}`);
    });
});
