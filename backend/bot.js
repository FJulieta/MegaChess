const { 
    get_ally_code,
    get_enemy_code,
    is_piece_black,
    is_piece_white,
    get_defensive_row,
} = require('./helpers');
const {PIECE_QUEEN, PIECE_PAWN} = require('./constants');
const Board = require("./classes/Board");



module.exports.bot_run = (board_string, set) => {
    let board = new Board(board_string, set);

    let defense_posibilities = board.search_defense_posibilities();
    if (defense_posibilities.length > 0) {
        let response = {
            'from_row': defense_posibilities[0].ally_piece.row,
            'from_col': defense_posibilities[0].ally_piece.column,
            'to_row': defense_posibilities[0].enemy_piece.row,
            'to_col': defense_posibilities[0].enemy_piece.column
        };

        if(board.type === "white") {
            console.log(response);
        }
        return response;
    }

    let ally_queen_code = get_ally_code(PIECE_QUEEN, board.type);;
    let ally_queens = board.search_ally_pieces([ally_queen_code]);
    if (ally_queens.length > 0) {
        if (ally_queens.length === 1) {
            if (ally_queens[0].row != get_defensive_row(board.type)) {
                return {
                    'from_row': ally_queens[0].row,
                    'from_col': ally_queens[0].column,
                    'to_row': get_defensive_row(board.type),
                    'to_col': ally_queens[0].column
                }   
            }
        }

        if (ally_queens.length === 2) {

            let attack_queen;
            if(ally_queens[0].row === get_defensive_row(board.type)) {
                attack_queen = ally_queens[1];
            } else if(ally_queens[1].row === get_defensive_row(board.type)) {
                attack_queen = ally_queens[0];
            } else {
                return {
                    'from_row': ally_queens[0].row,
                    'from_col': ally_queens[0].column,
                    'to_row': get_defensive_row(board.type),
                    'to_col': ally_queens[0].column
                }
            }

            let piece_to_attack = attack_queen.get_piece_to_attack();
            if(piece_to_attack) {
                return {
                    'from_row': attack_queen.row,
                    'from_col': attack_queen.column,
                    'to_row': piece_to_attack.row,
                    'to_col': piece_to_attack.column
                }
            }

        }
    }

    let ally_pawn_code = get_ally_code(PIECE_PAWN, board.type);;
    let ally_pawns = board.search_ally_pieces([ally_pawn_code]);
    if (ally_pawns.length > 0) {
        for(let ally_pawn of ally_pawns) {
            let to_row;
            if (is_piece_black(ally_pawn.code)) {
                to_row = ally_pawn.row + 1
            } else {
                to_row = ally_pawn.row - 1
            }
            
            if(ally_pawn.check_valid_move()) {
                return {
                    'from_row': ally_pawn.row,
                    'from_col': ally_pawn.column,
                    'to_row': to_row,
                    'to_col': ally_pawn.column
                }
            }
        }
    }

    let ally_new_pawns = board.search_ally_pieces([ally_pawn_code], true);
    if (ally_new_pawns.length > 0) {
        for(ally_new_pawn of ally_new_pawns) {
            let to_row = null;

            if (is_piece_black(ally_new_pawn.code)) {
                if (ally_new_pawn._is_initial_position()) {
                    to_row = ally_new_pawn.row + 2
                } else {
                    to_row = ally_new_pawn.row + 1
                }
            } else {
                if (ally_new_pawn._is_initial_position()) {
                    to_row = ally_new_pawn.row - 2
                } else {
                    to_row = ally_new_pawn.row - 1
                }
            }

            if(ally_new_pawn.check_valid_move(to_row, ally_new_pawn.column)) {
                return {
                    'from_row': ally_new_pawn.row,
                    'from_col': ally_new_pawn.column,
                    'to_row': to_row,
                    'to_col': ally_new_pawn.column
                }
            }
        }
    }
}