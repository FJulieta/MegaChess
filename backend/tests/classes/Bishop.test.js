const assert = require('assert');
const Board = require('../../classes/Board');

it('test valid move', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhb qqkkbbhhrr' +
        'pppppp ppppppppp' +
        'ppppppp pppppppp' +
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

    let piece = board.board[0][4]
    is_valid = piece.check_valid_move(3, 7)
    assert.strictEqual(is_valid, true);
});

it('test valid eat', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhb qqkkbbhhrr' +
        'pppppp ppppppppp' +
        'ppppppp pppppppp' +
        '                ' +
        '         P      ' +
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

    let piece = board.board[0][4]
    is_valid = piece.check_valid_move(5, 9)
    assert.strictEqual(is_valid, true);
});

it('test invalid move', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhh bqqkkbbhhrr' +
        'pppp ppppppppppp' +
        'pppp ppppppppppp' +
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

    let piece = board.board[0][4]
    is_valid = piece.check_valid_move(5, 4)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by obstacle', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'ppppppp pppppppp' +
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

    let piece = board.board[0][4]
    is_valid = piece.check_valid_move(3, 7)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhb qqkkbbhhrr' +
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

    let piece = board.board[0][4]
    is_valid = piece.check_valid_move(3, 7)
    assert.strictEqual(is_valid, false);
});