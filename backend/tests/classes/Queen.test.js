const assert = require('assert');
const Board = require('../../classes/Board');

it('test valid move diagonal', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppp ppppppp' +
        'ppppppppp pppppp' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(3, 9)
    assert.strictEqual(is_valid, true);
});

it('test valid move straight', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbb qkkbbhhrr' +
        'pppppp ppppppppp' +
        'pppppp ppppppppp' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(3, 6)
    assert.strictEqual(is_valid, true);
});

it('test valid move straight horizontal', function() {
    let board = new Board(
        'rrhhbb qkkbbhhrr' +
        'rrhhbb qkkbbhhrr' +
        'pppppp ppppppppp' +
        'pppppp ppppppppp' +
        '                ' +
        '      q         ' +
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

    let piece = board.board[5][6]
    is_valid = piece.check_valid_move(5, 9)
    assert.strictEqual(is_valid, true);
});


it('test valid eat diagonal', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppp ppppppp' +
        'ppppppppp pppppp' +
        '                ' +
        '           P    ' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(5, 11)
    assert.strictEqual(is_valid, true);
});

it('test valid eat straight', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbb qkkbbhhrr' +
        'pppppp ppppppppp' +
        'pppppp ppppppppp' +
        '                ' +
        '      P         ' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(5, 6)
    assert.strictEqual(is_valid, true);
});

it('test invalid move', function() {
    let board = new Board(
        'rrhhbbq kkbbhhrr' +
        'rrhhbb    bbhhrr' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(2, 9)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by obstacle diagonal', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'ppppppppp pppppp' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(3, 9)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by obstacle straight', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'pppppp ppppppppp' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(3, 6)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap diagonal', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(3, 9)
    assert.strictEqual(is_valid, false);
});


it('test invalid move by overlap straight', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbb qkkbbhhrr' +
        'pppppp ppppppppp' +
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

    let piece = board.board[0][6]
    is_valid = piece.check_valid_move(3, 6)
    assert.strictEqual(is_valid, false);
});
