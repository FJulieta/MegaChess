const Piece = require('./Piece');
const { SET_TYPE_BLACK, SET_TYPE_WHITE } = require('../constants');

class Pawn extends Piece {
    constructor(board, code, row, column) {
        super(board, code, row, column);
    }

    _is_valid_square(row, column) {
        if (column === this.column) {
            // Check single square move
            if (Math.abs(row - this.row) === 1) {
                return true
            }

            // Check double square move
            if (
                Math.abs(row - this.row) === 2
                && this._is_initial_position()
            ) {
                return true
            }
        } else {

            if (
                this.type === SET_TYPE_WHITE 
                && this.row - row === 1
                && Math.abs(this.column - column) === 1
                && this.board.board[row][column]
                && this.board.board[row][column].type != this.type
            ) {
                return true;
            }
            if (
                this.type === SET_TYPE_BLACK
                && this.row - row === -1
                && Math.abs(this.column - column) === 1
                && this.board.board[row][column]
                && this.board.board[row][column].type != this.type
            ) {
                return true;
            }
        }

        return false;
    }

    _has_obstacles(row, column) {
        let row_list = this.generate_list_of_indexes(this.row, row);

        for (let i = 0; i < row_list.length; i++) {
            let piece = this.board.board[row_list[i]][column];

            if (piece) {
                return true
            }
        }

        return false;
    }

    _is_initial_position() {
        let start_column = 2;
        let start_advanced_column = 3;

        if (this.type === SET_TYPE_WHITE) {
            start_column = 13;
            start_advanced_column = 12;
        }

        if (this.row === start_column) {
            return true;
        }

        if (this.row === start_advanced_column) {
            if (this.board.board[start_column][this.column]) {
                return true
            }
        }

        return false;
    }

    check_valid_move(to_row, to_column) {
        to_row = parseInt(to_row);
        to_column = parseInt(to_column);

        if (!this.has_valid_index(to_row, to_column)) {
            return false;
        }

        if (!this._is_valid_square(to_row, to_column)) {
            return false;
        }

        if (this._has_obstacles(to_row, to_column)) {
            return false;
        }

        if (this.has_overlap(to_row, to_column)) {
            return false;
        }

        return true;
    }
}

module.exports = Pawn;