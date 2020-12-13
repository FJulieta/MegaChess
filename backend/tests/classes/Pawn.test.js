const assert = require('assert');
const Board = require('../../classes/Board');

it('test valid move', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        'p               ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[5][0]
    is_valid = piece.check_valid_move(6, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid single move', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        'pppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[3][0]
    is_valid = piece.check_valid_move(4, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid single move second row', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[2][0]
    is_valid = piece.check_valid_move(3, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid double move', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        'pppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[3][0]
    is_valid = piece.check_valid_move(5, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid double move second row', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[2][0]
    is_valid = piece.check_valid_move(4, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid eat', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqq kbbhhrr' +
        'pppppppppppppppp' +
        'pppppppppppppppp' +
        ' P              ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'P PPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[3][0]
    is_valid = piece.check_valid_move(4, 1)
    assert.strictEqual(is_valid, true);
});

it('test invalid move', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        'pppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[3][0]
    is_valid = piece.check_valid_move(5, 2)
    assert.strictEqual(is_valid, false);
});

it('test invalid eat move', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        'pppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[3][0]
    is_valid = piece.check_valid_move(4, 1)
    assert.strictEqual(is_valid, false);
});

it('test invalid double move', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        'pppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[3][0]
    is_valid = piece.check_valid_move(5, 0)
    assert.strictEqual(is_valid, false);
});

it('test invalid double move out of initial positions', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        'p               ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[5][0]
    is_valid = piece.check_valid_move(7, 0)
    assert.strictEqual(is_valid, false);
});

it('test invalid double move out of initial positions', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        'p               ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[5][0]
    is_valid = piece.check_valid_move(7, 0)
    assert.strictEqual(is_valid, false);
});

it('test invalid double move by obstacle', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'pppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[2][0]
    is_valid = piece.check_valid_move(4, 0)
    assert.strictEqual(is_valid, false);
});

it('test invalid double move by obstacle with enemy', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'pppppppppppppppp' +
        'P               ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        ' PPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[3][0]
    is_valid = piece.check_valid_move(4, 0)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'pppppppppppppppp' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[0][2]
    is_valid = piece.check_valid_move(0, 3)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap with enemy', function () {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'pppppppppppppppp' +
        'P               ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[0][3]
    is_valid = piece.check_valid_move(0, 4)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap with enemy', function () {
    let board = new Board(
        "rrhhbbqqkkbbhhrr" +
        "  hhbbq kkbbhhrr" +
        "                " +
        "                " +
        "r               " +
        " r   ppppppppppp" +
        "    pppppppppppp" +
        "                " +
        "                " +
        "   q            " +
        "       P        " +
        "                " +
        "        PPPPPPPP" +
        "PP PPPPPPPPPPPPP" +
        "  HHBBQQKKBBHHRR" +
        " qHHBBQQKKBBHHRR",    
        'white'
    )

    let piece = board.board[10][7]
    is_valid = piece.check_valid_move(9, 3)
    assert.strictEqual(is_valid, false);
});
it('test invalid move backwards', function () {
    let board = new Board(
        "rrhhbbqqkkbbhhrr" +
        "  hhbbq kkbbhhrr" +
        "                " +
        "                " +
        "r               " +
        " r   ppppppppppp" +
        "    pppppppppppp" +
        "                " +
        "                " +
        "   q            " +
        "                " +
        "                " +
        "        PPPPPPPP" +
        "PPPPPPPPPPPPPPPP" +
        "RrhhBBQQKKBBHHRR" +
        "RrhHBBQQKKBBHHRR",    
        'white'
    )

    let piece = board.board[13][1]
    is_valid = piece.check_valid_move(14,2)
    assert.strictEqual(is_valid, false);
});

