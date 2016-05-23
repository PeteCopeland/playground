var template = require('./index.marko');

module.exports = function(req, res) {
  res.set('Content-Type', 'text/html; charset=utf-8');
  template.render({}, res);
}
