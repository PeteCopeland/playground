var template = require('./index.marko');

module.exports = function(req, res) {
  template.render({}, res);
}
