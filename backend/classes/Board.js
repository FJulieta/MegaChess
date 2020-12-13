const { parse_board } = require("../helpers");
const { MAP_PIECES_CODE_TO_PIECE_NAME, SET_TYPE_WHITE } = require("../constants");
const { MAP_PIECES_CODE_TO_OBJECT } = require("../maps");

class Board {
    constructor(board_string, type) {
        this.type = type;
        let { board, pieces } = this.get_board_and_pieces(
            parse_board(board_string)
        );

        this.board = board;
        this.pieces = pieces;   
    }

    get_board_and_pieces(board) {
        let pieces = [];
        for (let i = 0; i < board[0].length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                let piece = board[i][j];

                if (!(piece in MAP_PIECES_CODE_TO_PIECE_NAME)) {
                    board[i][j] = null;
                    continue;
                }

                piece = new MAP_PIECES_CODE_TO_OBJECT[piece](
                    this, piece, i, j
                );

                if (this.type === SET_TYPE_WHITE) {
                    pieces.push(piece);
                }else {
                    pieces.unshift(piece);
                }    
                board[i][j] = piece;
            }
        }
        return { board, pieces };
    }

    search_ally_pieces(pieces_code, all_board = false) {
        let start_row;
        let end_row;

        if (this.type === SET_TYPE_WHITE) {
            start_row = 0;
            end_row = this.board[0].length - 4;
        } else {
            start_row = 4;
            end_row = this.board[0].length;
        }

        if (all_board) {
            start_row = 0;
            end_row = 15;
        }

        let ally_pieces = []
        for (let piece of this.pieces) {
            if (
                pieces_code.find(piece_code => piece_code === piece.code)
                && piece.row >= start_row
                && piece.row <= end_row
            ) {
                ally_pieces.push(piece);
            }
        }

        return ally_pieces;
    }

    search_pieces(pieces_code = null, all_board = false, is_defensive = false) {
        let start_row = 4;
        let end_row = this.board[0].length - 4;

        if (all_board) {
            start_row = 0;
            end_row = 15;
        }

        if(is_defensive){
            if (this.type === SET_TYPE_WHITE) {
                start_row = 4;
                end_row = this.board[0].length;
            } else {
                start_row = 0;
                end_row = this.board[0].length - 4;
            }
        }

        let pieces_moved = []
        for (let i = start_row; i < end_row; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (!this.board[i][j] || this.board[i][j].type === this.type) {
                    continue;
                }

                if (pieces_code && !pieces_code.find(piece_code => piece_code === this.board[i][j].code)) {
                    continue;
                }

                pieces_moved.push(this.board[i][j]);
            }
        }
        return pieces_moved;
    }

    search_defense_posibilities(pieces_code = null) {
        let defense_posibilities = [];

        let ally_pieces = [];
        for (let piece of this.pieces) {
            if (piece.type === this.type) {
                ally_pieces.push(piece)
            }
        }

        let enemy_pieces = this.search_pieces(pieces_code, false, true);
        for (let enemy_piece of enemy_pieces) {
            for (let ally_piece of ally_pieces) {
                if (ally_piece.check_valid_move(enemy_piece.row, enemy_piece.column)) {
                    defense_posibilities.push({
                        'ally_piece': ally_piece,
                        'enemy_piece': enemy_piece,
                    })
                }
            }
        }

        return defense_posibilities;
    }
};

module.exports = Board;