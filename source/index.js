var normalize = require('./normalize');
var patterns = require('./patterns');

module.exports = function(string) {
  var normalized = normalize(string);
  var length = patterns.length;
  for (var index = 0; index < length; index++) {
    var pattern = patterns[index];
    var match = pattern.re.exec(normalized);
    if (match) {
      return pattern.search(match);
    }
  }
  return false;
};

module.exports.version =  '0.0.0-prerelease';
