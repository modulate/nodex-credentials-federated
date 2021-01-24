exports = module.exports = function() {
  // https://tools.ietf.org/html/draft-bradley-oauth-jwt-encoded-state-06
  
  return {
    
    serialize: function(msg) {
      return {
        aud: msg.location,
        as: msg.provider,
        target_link_uri: msg.returnTo,
        rfp: msg.csrfToken
      };
    }
    
  };
};

exports['@implements'] = 'http://i.authnomicon.org/oauth2/state/tokens/Dialect';
exports['@type'] = 'jwt';
exports['@singleton'] = true;
