/* jshint mocha: true */
var expect = require('chai').expect;
var query = require('..');

describe('query parsing', function() {
  describe('for definitions of a term', function() {
    it('definitions of Claim', function() {
      expect(query('definitions of Claim'))
        .to.eql([{
          subject: {type: 'form', identifier: 'x'},
          predicate: 'defines',
          object: {type: 'term', value: 'Claim'}
        }]);
    });

    it('definitions of "Claim"', function() {
      expect(query('definitions of "Claim"'))
        .to.eql([{
          subject: {type: 'form', identifier: 'x'},
          predicate: 'defines',
          object: {type: 'term', value: 'Claim'}
        }]);
    });
  });

  describe('uses of a term', function() {
    it('uses of Claim', function() {
      expect(query('uses of Claim'))
        .to.eql([{
          subject: {type: 'form', identifier: 'x'},
          predicate: 'uses',
          object: {type: 'term', value: 'Claim'}
        }]);
    });

    it('uses of "Claim"', function() {
      expect(query('uses of "Claim"'))
        .to.eql([{
          subject: {type: 'form', identifier: 'x'},
          predicate: 'uses',
          object: {type: 'term', value: 'Claim'}
        }]);
    });
  });

  it('returns false for no match', function() {
    expect(query('nonsense'))
      .to.be.false();
  });
});
