var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function(req, res, next) {
	console.log('this is auth')
	if (req.headers['x-auth']) {
		console.log('auth.js : ', req.headers['x-auth']);
		req.auth = jwt.decode(req.headers['x-auth'], config.secret)
	}
	next()
}