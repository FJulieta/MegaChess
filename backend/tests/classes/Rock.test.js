const assert = require('assert');
const Board = require('../../classes/Board');

it('test valid move vertical', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        ' rhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
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

    let piece = board.board[0][0]
    is_valid = piece.check_valid_move(6, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid move horizontal', function() {
    let board = new Board(
        ' rhhbbqqkkbbhhrr' +
        ' rhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        'r               ' +
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
    is_valid = piece.check_valid_move(5, 9)
    assert.strictEqual(is_valid, true);
});

it('test valid eat vertical', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        ' rhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        'P               ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPP PPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[0][0]
    is_valid = piece.check_valid_move(5, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid eat horizontal', function() {
    let board = new Board(
        ' rhhbbqqkkbbhhrr' +
        ' rhhbbqqkkbbhhrr' +
        ' ppppppppppppppp' +
        ' ppppppppppppppp' +
        '                ' +
        'r         P     ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PPPPPP PPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[5][0]
    is_valid = piece.check_valid_move(5, 9)
    assert.strictEqual(is_valid, true);
});

it('test invalid move', function() {
    let board = new Board(
        'rrhhbbqkkkbbhhrr' +
        'r hhbbqqkkbbhhrr' +
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

    let piece = board.board[0][0]
    is_valid = piece.check_valid_move(1, 1)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by obstacle', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
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

    let piece = board.board[0][0]
    is_valid = piece.check_valid_move(3, 0)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        ' rhhbbqqkkbbhhrr' +
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

    let piece = board.board[0][0]
    is_valid = piece.check_valid_move(3, 0)
    assert.strictEqual(is_valid, false);
});
