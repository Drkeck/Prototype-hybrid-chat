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

    let id = 0
    let users = []
    server.on('connection', ws => {

        // will have to go through clients or id's and check if the user is online
        // but we need a reliable way of saving the id's that relate to our internal data
        // so that users actually send messages to each other and not to the void
        ws.id = id;
        id = id + 1;
        users[ws.id] = ws;
        users.forEach(user => {
            console.log(user.id)
        })

        ws.on('message', message => {
            // we need to filter through online users and see if the socket is open for the target.
            // then we will need to either send the message to the them if its open, or skip that and just update the database.
            try {
                const data = JSON.parse(message)
                // ws.send(message)
                users.forEach(user => {
                    if (user.id != ws.id) {
                        console.log("send to user")
                        user.send(message)
                    } else {
                        console.log("dont send to the same user")
                    }
                })
            } catch (e) {
                console.log(`something went wrong: ${e.message}`)
            }
        });

        ws.on("close", (stream) => {
            users.forEach(user => {
                if (user.id === ws.id) {
                    const newlist = users.filter(user => user.id === ws.id)
                    console.log(newlist)
                    users = newlist
                }
            })
        })
    })
});