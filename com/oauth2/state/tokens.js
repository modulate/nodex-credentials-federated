// WIP

exports = module.exports = function(dialects, tokens) {
  var Tokens = require('tokens').Tokens;
  
  // TODO: Initialize this with default dialect and format
  return new Tokens(dialects, tokens);
};

exports['@singleton'] = true;
exports['@require'] = [
  './tokens/dialects',
  'http://i.bixbyjs.org/tokens'
];
