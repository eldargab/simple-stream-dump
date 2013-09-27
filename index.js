var loop = require('asyncloop')

module.exports = function dump(stream) {
  loop(function(next) {
    stream.read(function(err, chunk) {
      if (!err && chunk !== undefined) next()
    })
  })
}