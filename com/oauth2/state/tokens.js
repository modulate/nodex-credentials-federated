// WIP

exports = module.exports = function(dialects) {
  var Tokens = require('tokens').Tokens;
  
  // TODO: Initialize this with default dialect and format
  var tokens = new Tokens(dialects);
  
  return tokens;
};

exports['@singleton'] = true;
exports['@require'] = [
  './tokens/dialects'
];
