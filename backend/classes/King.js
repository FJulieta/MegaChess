const Piece = require('./Piece');

class King extends Piece{
    constructor(board, code, row, column) {
        super(board, code, row, column);
    }

    _is_valid_square(row, column) {
        // Check valid move
        if (Math.abs(row - this.row) <= 1 && Math.abs(column - this.column) <= 1) {
            return true;
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

        if(this.has_overlap(to_row, to_column)) {
            return false;
        }

        return true;
    }
}

module.exports = King;