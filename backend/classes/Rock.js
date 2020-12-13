const Piece = require('./Piece');
 
class Rock extends Piece{
    constructor(board, code, row, column) {
        super(board, code, row, column);
    }

    _is_valid_square(row, column) {
        // Check valid move
        if (row === this.row || column === this.column) {
            return true;
        }

        return false;
    }

    _has_obstacles(row, column){
        let row_list = this.generate_list_of_indexes(this.row, row);
        let column_list = this.generate_list_of_indexes(this.column, column);
        let max = Math.max(row_list.length, column_list.length);

        for(let i = 0; i < max; i++) {
            let piece;
            if(row_list.length === 0){
                piece = this.board.board[row][column_list[i]];
            } else if (column_list.length === 0){
                piece = this.board.board[row_list[i]][column];
            }

            if(piece) {
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

        if(this._has_obstacles(to_row, to_column)){
            return false;
        }

        if (this.has_overlap(to_row, to_column)) {
            return false;
        }

        return true;
    }
}

module.exports = Rock;