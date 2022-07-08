"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let messagesMap = {};
exports.default = (p, msg) => {
    if (messagesMap[p.auth] == msg) {
        return true;
    }
    messagesMap[p.auth] = msg;
    return false;
};
