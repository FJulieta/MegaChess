const Piece = require('./Piece');

class Bishop extends Piece{
    constructor(board, code, row, column) {
        super(board, code, row, column);
    }

    _is_valid_square(row, column) {
        // Check valid move
        const difference = this.row - this.column;
        const summation = this.row + this.column;

        if(row - column === difference || row + column === summation) {
            return true;
        }

        return false;
    }

    _has_obstacles(row, column){
        let row_list = this.generate_list_of_indexes(this.row, row);
        let column_list = this.generate_list_of_indexes(this.column, column);

        for(let i = 0; i < row_list.length; i++) {
            let piece = this.board.board[row_list[i]][column_list[i]];

            if(piece) {
                return true
            }
        }

        return false;
    }

    check_valid_move(to_row, to_column) {
        to_row = parseInt(to_row);
        to_column = parseInt(to_column);

        if(!this.has_valid_index(to_row, to_column)) {
            return false;
        }

        if(!this._is_valid_square(to_row, to_column)) {
            return false;
        }

        if(this._has_obstacles(to_row, to_column)){
            return false;
        }

        if(this.has_overlap(to_row, to_column)) {
            return false;
        }

        return true;
    }


}

module.exports = Bishop;