const assert = require('assert');
const Board = require('../../classes/Board');

it('test search_pieces_moved', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        'p pppppppppppppp' +
        '                ' +
        '                ' +
        ' p              ' +
        'Q               ' +
        '                ' +
        '   P            ' +
        '    P    P      ' +
        '                ' +
        ' PP  PPPP PPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let pieces = board.search_pieces()
    assert.strictEqual(pieces.length, 4);
});

it('test search_defense_posibilities', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        'p pppppppppppppp' +
        '                ' +
        '                ' +
        ' p              ' +
        'Q               ' +
        '                ' +
        '   P            ' +
        '    P    P      ' +
        '                ' +
        ' PP  PPPP PPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let defense_posibilities = board.search_defense_posibilities()
    assert.strictEqual(defense_posibilities.length, 1);
    assert.strictEqual(defense_posibilities[0].ally_piece.code, 'p');
    assert.strictEqual(defense_posibilities[0].ally_piece.row, 6);
    assert.strictEqual(defense_posibilities[0].ally_piece.column, 1);
    assert.strictEqual(defense_posibilities[0].ally_piece.type, 'black');

    assert.strictEqual(defense_posibilities[0].enemy_piece.code, 'Q');
    assert.strictEqual(defense_posibilities[0].enemy_piece.row, 7);
    assert.strictEqual(defense_posibilities[0].enemy_piece.column, 0);
    assert.strictEqual(defense_posibilities[0].enemy_piece.type, 'white');
});

it('test search_defense_posibilities passing piece code', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        'p pppppppppppppp' +
        '                ' +
        '                ' +
        ' p              ' +
        'Q               ' +
        '                ' +
        '   P            ' +
        '    P    P      ' +
        '                ' +
        ' PP  PPPP PPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let defense_posibilities = board.search_defense_posibilities(['Q'])
    assert.strictEqual(defense_posibilities.length, 1);
    assert.strictEqual(defense_posibilities[0].ally_piece.code, 'p');
    assert.strictEqual(defense_posibilities[0].ally_piece.row, 6);
    assert.strictEqual(defense_posibilities[0].ally_piece.column, 1);
    assert.strictEqual(defense_posibilities[0].ally_piece.type, 'black');

    assert.strictEqual(defense_posibilities[0].enemy_piece.code, 'Q');
    assert.strictEqual(defense_posibilities[0].enemy_piece.row, 7);
    assert.strictEqual(defense_posibilities[0].enemy_piece.column, 0);
    assert.strictEqual(defense_posibilities[0].enemy_piece.type, 'white');
});

it('test search_defense_posibilities null passing code', function() {
    let board = new Board(
        'rrhhbbqqkkbbhhrr' +
        'rrhhbbq kkbbhhrr' +
        'pppppppppppppppp' +
        'p pppppppppppppp' +
        '                ' +
        '                ' +
        ' p              ' +
        'R               ' +
        '                ' +
        '   P            ' +
        '    P    P      ' +
        '                ' +
        ' PP  PPPP PPPPPP' +
        'PPPPPPPPPPPPPPPP' +
        'RRHHBBQQKKBBHHRR' +
        'RRHHBBQQKKBBHHRR',
        'black'
    )

    let defense_posibilities = board.search_defense_posibilities(['Q'])
    assert.strictEqual(defense_posibilities.length, 0);
});

it('test search_defense_posibilities null passing code', function() {
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
        "  HHBBQQKKBBHHRR",    
        'white'
    )

    let defense_posibilities = board.search_defense_posibilities()
    assert.strictEqual(defense_posibilities.length, 0);
});
