const assert = require('assert');
const Board = require('../../classes/Board');

it('test valid move diagonal', function() {
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

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(1, 7)
    assert.strictEqual(is_valid, true);
});

it('test valid move straight', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqq kbbhhrr' +
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

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(1, 8)
    assert.strictEqual(is_valid, true);
});

it('test valid move straight horizontal', function() {
    let board = new Board(
        'rrhhbbqqk bbhhrr' +
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

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(0, 9)
    assert.strictEqual(is_valid, true);
});

it('test valid eat diagonal', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbb P kbbhhrr' +
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
        'PPPPPPPPP PPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(1, 7)
    assert.strictEqual(is_valid, true);
});

it('test valid eat straight', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq P bbhhrr' +
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
        'PPPPPP PPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(1, 8)
    assert.strictEqual(is_valid, true);
});

it('test invalid move', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqq kbbhhrr' +
        'pppppppp ppppppp' +
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

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(2, 8)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap diagonal', function() {
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

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(0, 9)
    assert.strictEqual(is_valid, false);
});


it('test invalid move by overlap straight', function() {
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

    let piece = board.board[0][8]
    is_valid = piece.check_valid_move(1, 8)
    assert.strictEqual(is_valid, false);
});
