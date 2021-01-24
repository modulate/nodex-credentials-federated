// WIP

exports = module.exports = function(IoC, logger) {
  var Dialects = require('tokens').Dialects;
  
  
  var dialects = new Dialects();
  
  return Promise.resolve(dialects)
    .then(function(dialects) {
      return new Promise(function(resolve, reject) {
        var components = IoC.components('http://i.authnomicon.org/oauth2/state/tokens/Dialect');
      
        (function iter(i) {
          var component = components[i];
          if (!component) {
            return resolve(dialects);
          }
      
          component.create()
            .then(function(dialect) {
              logger.info('Loaded OAuth 2.0 state token dialect: ' + component.a['@type']);
              dialects.use(component.a['@type'], dialect);
              iter(i + 1);
            }, function(err) {
              var msg = 'Failed to load OAuth 2.0 state token dialect: ' + component.a['@type'] + '\n';
              msg += err.stack;
              logger.warning(msg);
              return iter(i + 1);
            })
        })(0);
      });
    })
    .then(function(dialects) {
      return dialects;
    });
};

exports['@singleton'] = true;
exports['@require'] = [
  '!container',
  'http://i.bixbyjs.org/Logger'
];
