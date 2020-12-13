const {SET_TYPE_BLACK, SET_TYPE_WHITE} = require('../constants');
const {MAP_PIECES_CODE_TO_PIECE_NAME} = require('../constants');
const {MAP_PIECES_CODE_TO_POINTS } = require('../constants');

class Piece {
    constructor(board, code, row, column) {

        this.board = board;
        this.row = parseInt(row);
        this.column = parseInt(column);
        this.code = code;

        this.name = MAP_PIECES_CODE_TO_PIECE_NAME[code];
        if (this.code === this.code.toLowerCase()) {
            this.type = SET_TYPE_BLACK;
        } else {
            this.type = SET_TYPE_WHITE;
        }

        this.points = MAP_PIECES_CODE_TO_POINTS[this.code];
    }

    has_overlap(to_row, to_column) {
        const {PIECE_PAWN} = require('../constants');

        if (this.board.board[to_row][to_column]) {
            if(this.name === PIECE_PAWN && this.column === to_column) {
                return true;
            }

            if(this.board.board[to_row][to_column].type === this.type) {
                return true;
            }
        }

        return false;
    }

    generate_list_of_indexes(start, end) {
        let i = 1;
        let row_indexes = [];

        while (Math.abs(start - end) > i){
            if(start > end){
                row_indexes.push(start - i);
            }
    
            if(start < end){
                row_indexes.push(start + i);
            }
            i++;
        }

        return row_indexes;
    }


    has_valid_index(row, column) {
        // Check invalid index
        if(row < 0 || row > 15 || column < 0 || column > 15) {
            return false;
        }
        return true;
    }

    get_piece_to_attack() {
        let can_attack_pieces = [];
        let enemy_pieces = [];
        for(let piece of this.board.pieces) {
            if (piece.type != this.type) {
                enemy_pieces.push(piece);
            }
        }
        
        for(let piece of enemy_pieces) {
            if (this.check_valid_move(piece.row, piece.column)) {
                can_attack_pieces.push(piece);
            }
        }

        if(can_attack_pieces.length < 1){
            return
        }

        let target = can_attack_pieces[0];
        for(let piece of can_attack_pieces) {
            if(piece.points > target.points) {
                target = piece;
            }
        }

        return target;
    }
}

module.exports = Piece;