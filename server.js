// http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4

var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080; 

var router = express.Router(); 				// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	//res.json({ message: 'Media-API' });
	res.sendFile(__dirname + '/index.html');
});

// Server json data via API
router.get('/api', function(req, res) {
	// do some database query, meanwhile post some JSON data
	res.json({message: 'Hello from mediaAPI'});
});

// REGISTER OUR ROUTES 
// all of our routes will be prefixed with /api
app.use('/', router);

// enable some files
app.use(express.static(__dirname + '/'));

// START THE SERVER
// ================
app.listen(port);
console.log('Server started at port ' + port);