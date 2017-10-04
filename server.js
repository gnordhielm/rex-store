var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var morgan = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var port = process.env.PORT || 5000


// create express app
var app = express()

// set up public directory path and favicon
app.use(favicon(path.join(__dirname, 'src', 'assets', 'favicon.ico')))
app.use(express.static('dist'))

// resolve https to http
app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url)
	} else {
		next()
	}
})

// load general middleware
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

// set up routes - always send index
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

// listen on port variable
app.listen(port, function() {
	var msg = `Server listening on port ${port}.`
	var bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
})