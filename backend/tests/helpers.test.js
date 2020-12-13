var assert = require('assert');
const { parse_board } = require("../helpers");
const { MAP_PIECES_NAME_TO_PIECE_CODE, PIECE_BISHOP, PIECE_BISHOP_BLACK, PIECE_BISHOP_WHITE } = require("../constants");


it('test parse_board', function() {
    const result = parse_board('rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR');
})

it('test MAP_PIECES_NAME_TO_PIECE_CODE', function() {
    let bishops = MAP_PIECES_NAME_TO_PIECE_CODE(PIECE_BISHOP);
    const expected = [PIECE_BISHOP_WHITE, PIECE_BISHOP_BLACK];
    assert.deepStrictEqual(bishops, expected);
})