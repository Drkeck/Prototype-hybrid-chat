const express = require('express');
const app = express();
// const path = require('path');
const WebSocket = require('ws')
const server = new WebSocket.Server({ port: '8080' })

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
        var id = 0
        var lookup = {}
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                // set clients id
                wss.id = id
                // itterate on id
                id++
                // apply lookup to the wss
                lookup[wss.id] = wss

                client.send(JSON.stringify({ message: "hello", from: "server" }))
            }
        });

        wss.on('message', message => {
            // we need to filter through online users and see if the socket is open for the target.
            // then we will need to either send the message to the them if its open, or skip that and just update the database.
            console.log(lookup[0].id);
            wss.send(message)
        });
    })
});