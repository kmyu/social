var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

//require('./controllers/api/posts')(app)

app.use('/',require('./controllers/static'))

app.use(require('./auth'))

//포스팅
app.use('/api/posts',require('./controllers/api/posts'));

//권한
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))



var server = app.listen(3000, function(){
	console.log('Server listening on', 3000)
})

require('./websockets').connect(server);