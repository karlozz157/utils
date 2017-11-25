const expect = require('chai').expect;
const Utils = require('..').Utils;

describe('#utils', function() {

    it('si es palindromo regresa true', function() {
        const isPalindrome = Utils.isPalindrome('oso');
        expect(isPalindrome).to.equal(true);
    });

    it('si es no palindromo regresa false', function() {
        const isPalindrome = Utils.isPalindrome('hola');
        expect(isPalindrome).to.equal(false);
    });

});
