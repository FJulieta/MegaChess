const assert = require('assert');
const Board = require('../../classes/Board');

it('test valid move by row', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
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
    is_valid = piece.check_valid_move(2, 1)
    assert.strictEqual(is_valid, true);
});

it('test valid move by column', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        ' rhhbbqqkkbbhhrr' +
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
    is_valid = piece.check_valid_move(1, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid eat by row', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'phpppppppppppppp' +
        'pppppppppppppppp' +
        'Pp              ' +
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

    let piece = board.board[2][1]
    is_valid = piece.check_valid_move(4, 0)
    assert.strictEqual(is_valid, true);
});

it('test valid eat by column', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
        'pppppppppppppppp' +
        'hp              ' +
        '  P             ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        '                ' +
        'PP PPPPPPPPPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(5, 2)
    assert.strictEqual(is_valid, true);
});

it('test invalid move 1', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
        'pppppppppppppppp' +
        'h               ' +
        '                ' +
        ' p              ' +
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

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(5, 1)
    assert.strictEqual(is_valid, false);
});

it('test invalid move 2', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
        'pppppppppppppppp' +
        'h               ' +
        '                ' +
        ' p              ' +
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

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(6, 0)
    assert.strictEqual(is_valid, false);
});

it('test invalid move 3', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
        'pppppppppppppppp' +
        'h               ' +
        '                ' +
        ' p              ' +
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

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(4, 2)
    assert.strictEqual(is_valid, false);
});

it('test invalid move 4', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
        'pppppppppppppppp' +
        'h               ' +
        '                ' +
        ' p              ' +
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

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(6, 2)
    assert.strictEqual(is_valid, false);
});

it('test invalid move 5', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
        'pppppppppppppppp' +
        'h               ' +
        '                ' +
        ' p              ' +
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

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(7, 3)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap row', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'p pppppppppppppp' +
        'pppppppppppppppp' +
        'h               ' +
        '                ' +
        ' p              ' +
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

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(6, 1)
    assert.strictEqual(is_valid, false);
});

it('test invalid move by overlap column', function() {
    let board = new Board(
        'rr hbbqqkkbbhhrr' +
        'rrhhbbqqkkbbhhrr' +
        'pppppppppppppppp' +
        'pp ppppppppppppp' +
        'h               ' +
        '  p             ' +
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

    let piece = board.board[4][0]
    is_valid = piece.check_valid_move(5, 2)
    assert.strictEqual(is_valid, false);
});