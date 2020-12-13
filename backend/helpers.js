const { SET_TYPE_BLACK, SET_TYPE_WHITE, MAP_PIECES_NAME_TO_PIECE_CODE } = require('./constants');

const parse_board = (string) => {
    let rows = string.match(/.{1,16}/g);
    let matrix = rows.map(row => row.split(''));
    return matrix;
}

const is_piece_black = (piece_code) => {
    return piece_code === piece_code.toLowerCase();
}

const is_piece_white = (piece_code) => {
    return piece_code === piece_code.toUpperCase();
}

const get_piece_type = (piece_code) => {
    if (is_piece_black(piece_code)) {
        return SET_TYPE_BLACK;
    }
    return SET_TYPE_WHITE;
}

const has_valid_index = (row, column) => {
    // Check invalid index
    if(row < 0 || row > 15 || column < 0 || column > 15) {
        return false;
    }
    return true;
}

const get_ally_code = (piece_code, set_type) => {
    let pieces = MAP_PIECES_NAME_TO_PIECE_CODE(piece_code);
    for (piece of pieces) {
        if (
            set_type === SET_TYPE_BLACK
            && is_piece_black(piece)
        ) {
            return piece;
        }

        if (
            set_type === SET_TYPE_WHITE
            && is_piece_white(piece)
        ) {
            return piece;
        }
    }
}

const get_enemy_code = (piece_code, set_type) => {
    let pieces = MAP_PIECES_NAME_TO_PIECE_CODE(piece_code);
    for (piece of pieces) {
        if (
            set_type === SET_TYPE_WHITE
            && is_piece_black(piece)
        ) {
            return piece;
        }

        if (
            set_type === SET_TYPE_BLACK
            && is_piece_white(piece)
        ) {
            return piece;
        }
    }
}

const get_defensive_row = (set_type) => {
    if(set_type === SET_TYPE_WHITE) {
        return 6;
    }
    if(set_type === SET_TYPE_BLACK) {
        return 9;
    }
}

module.exports.parse_board = parse_board;
module.exports.is_piece_black = is_piece_black;
module.exports.is_piece_white = is_piece_white;
module.exports.get_piece_type = get_piece_type;
module.exports.has_valid_index = has_valid_index;
module.exports.get_ally_code = get_ally_code;
module.exports.get_enemy_code = get_enemy_code;
module.exports.get_defensive_row = get_defensive_row;

function print_matrix() {
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            process.stdout.write(matrix[i][j] + ' ');
        }
        process.stdout.write('\n');
    }
}
