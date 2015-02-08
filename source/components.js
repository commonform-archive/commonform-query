var ASCII_WITHOUT_QUOTES = '[\x20-\x21\x23-\x7E]+';

module.exports = {
  fingerprint: {
    natural: 'a Form fingerprint',
    re:  '[abcdef0123456789]{64}'
  },
  term: {
    natural: 'a defined term',
    re: ASCII_WITHOUT_QUOTES
  },
  summary: {
    natural: 'a summary',
    re: ASCII_WITHOUT_QUOTES
  }
};
