/*
 * regexp-inverse
 * https://github.com/dploeger/regexp-inverse
 *
 * Copyright (c) 2016 Dennis Ploeger
 * Licensed under the MIT license.
 */

'use strict';

function RegExpInverse(pattern, flags) {
    this.regExp = new RegExp(pattern, flags);
}

RegExpInverse.prototype.exec = function (text) {

    var matches = this.regExp.exec(text);

    if (matches) {

        return null;

    } else {

        return [text];

    }

};

RegExpInverse.prototype.compile = function (pattern, flags) {
    this.regExp.compile(pattern, flags);
};

RegExpInverse.prototype.test = function (text) {
    return !this.regExp.test(text);
};

RegExpInverse.prototype.toString = function () {
    return this.regExp.toString();
};

module.exports = RegExpInverse;
