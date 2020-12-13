// Third-party libraries
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const WebSocket = require('ws');
const SocketIo = require('socket.io');

// --- Server settings ---
// Http express server
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

// Start socket.io server
const io = SocketIo(http);

// Websocket heroku
const ws = new WebSocket(
    "ws://megachess.herokuapp.com/service?authtoken=c3d0df2d-e805-4ef3-82bf-cb61e2912cfc"
);

ws.on("message", async function (payload) {
    console.log(payload);
    try {
        payload = await JSON.parse(payload);
        const { event, data } = payload;
        map_action_function[event](data);
    } catch (ex) {
        console.error(ex);
    }
});

// Router
const transport = require('./backend/transport')(ws, io);
const domain = require("./backend/domain")(transport);

domain.get_connected_users();
domain.flush_current_users_challenged();

const map_action_function = {
    'your_turn': domain.move,
    'update_user_list': domain.challenge_users,
    'ask_challenge': domain.accept_challenge,
    'gameover': domain.game_over,
    'response_error': function (data) {
        console.error(data);
    },
};