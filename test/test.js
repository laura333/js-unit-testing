'use strict';

var expect = require("chai").expect;
var code = require('../main.js');

// Write tests for the function "greeting":
//
// Input: name, string (ex: 'Jennie')
//
// Output: greeting that incorporates string input (ex: 'Hello, Jennie')
//
// Test for:
// accepts only one argument
// input is a string
// output is a string
// output is expected string

describe('greeting', function() {
    // accepts only one argument
    it('accepts only one argument', function() {
        expect(code.greeting('Jennie', 'Aaron')).to.equal('Only one argument, please.');

        expect(code.greeting('Jennie')).to.not.equal('Only one argument, please.');
    });
    // input is a string
    it('input is string', function() {
        expect(code.greeting(3)).to.equal('Name should be a string.');

        expect(code.greeting('Jennie')).to.not.equal('Name should be a string.');
    });
    // output is a string
    it('output is string', function() {
        expect(code.greeting('Jennie')).to.be.a('string');
    });
    // output is expected string
    it('output is the expected string', function() {
        expect(code.greeting('Jennie')).to.equal('Hello, Jennie!');
    });
});
