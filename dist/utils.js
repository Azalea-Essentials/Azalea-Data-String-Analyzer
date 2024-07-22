"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToText = exports.textToHex = void 0;
function textToHex(text) {
    return text.split('').map(function (char) {
        return char.charCodeAt(0).toString(16);
    }).join('_');
}
exports.textToHex = textToHex;
function hexToText(hex) {
    return hex.split('_').map(function (code) {
        return String.fromCharCode(parseInt(code, 16));
    }).join('');
}
exports.hexToText = hexToText;
