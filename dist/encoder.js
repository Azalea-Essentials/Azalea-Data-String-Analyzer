"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeLegacyDataString = void 0;
var utils_1 = require("./utils");
function encodeLegacyDataString(opts) {
    var parts = [];
    // Separator character (per part: ;), per subpart: ,
    for (var _i = 0, _a = opts.NormalUIs; _i < _a.length; _i++) {
        var ui = _a[_i];
        var subparts = [
            "".concat(ui.body ? (0, utils_1.textToHex)(ui.body) : "N/A"),
            "".concat((0, utils_1.textToHex)(ui.title)),
            "".concat((0, utils_1.textToHex)(ui.tag)),
            "".concat(ui.item ? (0, utils_1.textToHex)(ui.item) : "N/A"),
            "".concat((0, utils_1.textToHex)(JSON.stringify(ui.buttons)))
        ];
        parts.push(subparts.join(','));
    }
    for (var _b = 0, _c = opts.ChestGUIs; _b < _c.length; _b++) {
        var ui = _c[_b];
        var subparts = [
            "".concat((0, utils_1.textToHex)(ui.title)),
            "".concat((0, utils_1.textToHex)(ui.tag)),
            "".concat((0, utils_1.textToHex)(ui.rows.toString())),
            "".concat((0, utils_1.textToHex)((ui.color ? ui.color : 0).toString())),
            "".concat((0, utils_1.textToHex)(JSON.stringify(ui.icons)))
        ];
        parts.push(subparts.join(','));
    }
    var sidebarSubparts = __spreadArray([
        "".concat(opts.SidebarProperties.enabled ? "ENABLED" : "DISABLED")
    ], opts.SidebarProperties.lines.map(function (line) {
        return line.map(function (frame) {
            return (0, utils_1.textToHex)(frame);
        }).join('|');
    }), true);
    parts.push(sidebarSubparts.join(','));
    for (var _d = 0, _e = opts.Warps; _d < _e.length; _d++) {
        var warp = _e[_d];
        var subparts = [
            "".concat((0, utils_1.textToHex)(warp.name)),
            "".concat(warp.position.x, ",").concat(warp.position.y, ",").concat(warp.position.z),
            "".concat(warp.rotation ? "".concat(warp.rotation.x, ",").concat(warp.rotation.y) : "N/A")
        ];
        parts.push(sidebarSubparts.join(','));
    }
    var configSubparts = [];
    for (var _f = 0, _g = Object.keys(opts.ConfigDB); _f < _g.length; _f++) {
        var key = _g[_f];
        configSubparts.push("".concat((0, utils_1.textToHex)(key), "|").concat((0, utils_1.textToHex)(opts.ConfigDB[key])));
    }
    if (!configSubparts.length)
        configSubparts.push("N/A");
    parts.push(configSubparts.join(','));
    return "AZALEADATA;".concat(parts.join(';'));
}
exports.encodeLegacyDataString = encodeLegacyDataString;
