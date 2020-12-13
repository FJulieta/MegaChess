const Bishop = require("././classes/Bishop");
const King = require("./classes/King");
const Knight = require("./classes/Knight");
const Pawn = require("./classes/Pawn");
const Queen = require("./classes/Queen");
const Rock = require("./classes/Rock");

const {
    PIECE_BISHOP_WHITE,
    PIECE_BISHOP_BLACK,
    PIECE_KING_WHITE,
    PIECE_KING_BLACK,
    PIECE_KNIGHT_WHITE,
    PIECE_KNIGHT_BLACK,
    PIECE_PAWN_WHITE,
    PIECE_PAWN_BLACK,
    PIECE_QUEEN_WHITE,
    PIECE_QUEEN_BLACK,
    PIECE_ROCK_WHITE,
    PIECE_ROCK_BLACK
} = require('./constants');

module.exports.MAP_PIECES_CODE_TO_OBJECT = {
    [PIECE_BISHOP_WHITE]: Bishop, [PIECE_BISHOP_BLACK]: Bishop,
    [PIECE_KING_WHITE]: King, [PIECE_KING_BLACK]: King,
    [PIECE_KNIGHT_WHITE]: Knight, [PIECE_KNIGHT_BLACK]: Knight,
    [PIECE_PAWN_WHITE]: Pawn, [PIECE_PAWN_BLACK]: Pawn,
    [PIECE_QUEEN_WHITE]: Queen, [PIECE_QUEEN_BLACK]: Queen,
    [PIECE_ROCK_WHITE]: Rock, [PIECE_ROCK_BLACK]: Rock,
};