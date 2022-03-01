const express = require('express');
const app = express();
// const path = require('path');
const WebSocket = require('ws')
const server = new WebSocket.Server({ port: '8080'})

const db = require('./config/connection.js')
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes'))

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Backend Server running on ${PORT}! https://localhost:${PORT}`);
    });
    server.on('connection', wss => {
        console.log(server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({message: "hello", from: "server"}))
            }
        }))
        
        wss.on('message', message => {
            console.log(wss.clients)
            wss.send(message)
        })
    })
});
