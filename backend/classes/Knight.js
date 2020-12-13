const Piece = require('./Piece');

class Knight extends Piece{
    constructor(board, code, row, column) {
        super(board, code, row, column);
    }

    _is_valid_square(row, column) {
        if (Math.abs(row - this.row) === 2 && Math.abs(column - this.column) === 1) {
            return true;
        }

        if (Math.abs(row - this.row) === 1 && Math.abs(column - this.column) === 2) {
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

module.exports = Knight;