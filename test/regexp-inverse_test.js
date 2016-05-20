'use strict';

var RegExpInverse = require('../lib/regexp-inverse.js');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports['regexp-inverse'] = {
    'test': function (test) {
        test.expect(1);
        // tests here
        var regExp = new RegExpInverse('.*');
        test.equal(
            regExp.test('foobar'),
            false,
            'test returned wrong result.'
        );

        test.done();
    },
    'exec': function (test) {
        test.expect(2);
        // tests here
        var regExp = new RegExpInverse('somethingelse');

        var matches = regExp.exec('foobar');

        test.ok(
            matches instanceof Array,
            'exec returned no array.'
        );

        test.equal(
            matches[0],
            'foobar',
            'exec returned wrong result.'
        );

        test.done();
    },
};
