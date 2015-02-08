var components = require('./components');

var term = function(string) {
  return {type: 'term', value: string};
};

var result = function(type) {
  return {type: type, identifier: 'x'};
};

var triple = function(s, p, o) {
  return {subject: s, predicate: p, object: o};
};

// Known search query patterns and logic for conversion into arrays of
// objects describing edge-walking steps.
//
// Patterns should be ordered from most used to least used.
module.exports = [
  {
    description: 'search for uses of a term',
    components: ['uses of ', components.term],
    search: function(match) {
      return [triple(result('form'), 'uses', term(match[2]))];
    }
  },
  {
    description: 'search for uses of a term in quotes',
    components: ['uses of "', components.term, '"'],
    search: function(match) {
      return [triple(result('form'), 'uses', term(match[2]))];
    }
  },
  {
    description: 'search for definitions of a term',
    components: ['definitions of ', components.term],
    search: function(match) {
      return [triple(result('form'), 'defines', term(match[2]))];
    }
  },
  {
    description: 'search for definitions of a term in quotes',
    components: ['definitions of "', components.term, '"'],
    search: function(match) {
      return [triple(result('form'), 'defines', term(match[2]))];
    }
  }
].map(function(pattern) {
  // Compile .components to regular expressions.
  var reString = '^' + pattern.components.reduce(function(re, c) {
    return re + '(' + (typeof c === 'string' ? c : c.re) + ')';
  }, '') + '$';
  pattern.re = new RegExp(reString);
  return pattern;
});
