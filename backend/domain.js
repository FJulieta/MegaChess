// Helper functions
const { parse_board } = require("./helpers");
const { bot_run } = require("./bot");

const whoami = "Julieta"

const opponents = 'all';
// const opponents = ["Julieta"];
let current_users_challenged = {};
let current_users_games = {};

module.exports = function (transport) {
    let module = {}

    module.move = (data) => {
        if (!(data.opponent_username in current_users_games)) {
            current_users_games[data.opponent_username] = data.board_id;

            if (current_users_challenged[data.opponent_username]) {
                delete current_users_challenged[data.opponent_username];
            }
        }

        const move_data = bot_run(data.board, data.actual_turn);
        let move = {
            'board_id': data.board_id,
            'turn_token': data.turn_token,
            ...move_data
        }
        transport.send('move', move)
        transport.emit('board', {
            'board_id': data.board_id,
            'board': parse_board(data.board),
            'opponent': data.opponent_username,
            'current_set': data.actual_turn,
        });
    }

    module.challenge_users = (data) => {
        for (user of data.users_list) {
            if (
                (opponents.includes(user) || opponents === 'all')
                && !(user in current_users_games)
                && !(user in current_users_challenged)
            ) {
                if (opponents === 'all' && user === whoami) {
                    continue;
                }

                current_users_challenged[user] = Date.now();
                transport.send('challenge', { 'username': user, 'message': 'Challenge request' })
            }
        }
    }

    module.accept_challenge = (data) => {
        const { username, board_id } = data;

        if (
            (opponents.includes(username) || opponents === 'all')
            && !(username in current_users_games)
            && !(username in current_users_challenged)
        ) {
            current_users_games[data.opponent_username] = data.board_id
            transport.send('accept_challenge', { 'board_id': board_id })
        }
    }

    module.game_over = (data) => {
        for (let [key, value] of Object.entries(current_users_games)) {
            if (value === data.board_id) {
                delete current_users_games[key];
            }
        }

        let opponent;
        let opponent_score;
        let my_score;

        if (data.white_username === whoami) {
            opponent = data.black_username;
            opponent_score = parseInt(data.black_score);
            my_score = parseInt(data.white_score);
        } else {
            opponent = data.white_username;
            opponent_score = parseInt(data.white_score);
            my_score = parseInt(data.black_score);
        }

        let result;
        if (my_score > opponent_score) {
            result = "win";
        } else if (my_score < opponent_score) {
            result = "lost";
        } else {
            result = "tied";
        }

        transport.emit('gameover', {
            'board_id': data.board_id,
            "opponent": opponent,
            "opponent_score": opponent_score,
            "my_score": my_score,
            "result": result,
        });
    }

    module.get_connected_users = () => {
        setInterval(function () {
            transport.send('get_connected_users', {})
        }, 300000);
    };

    module.flush_current_users_challenged = () => {
        setInterval(function () {
            for (let [user, date_challenged] of Object.entries(current_users_challenged)) {
                if (date_challenged + 1000 * 60 * 3 < Date.now()) {
                    delete current_users_challenged[user];
                }
            }
        }, 3000);
    };

    return module;
}