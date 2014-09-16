// server.js

// MYSQL connection

// mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/
// OPENSHIFT_MYSQL_DB_URL

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var port = process.env.PORT || 8080;        // set our port
    var ipaddress = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
    var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

router.get('/api', function(req, res) {
    //res.json({ message: 'hooray! welcome to our api!' });
  var mysql      = require('mysql');
  var connectionString = 'mysql://' + process.env.OPENSHIFT_MYSQL_DB_URL || 
  						'mysql://root:test1234@localhost:3306'
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'test1234',
    database : 'mediaplayer'
  });

  connection.connect();

  connection.query('SHOW TABLES', function(err, rows, fields) {
    console.log("rows:", rows);
    if (err) throw err;
    for(var solution in rows) {
      //console.log('Table', solution + ': ', rows[solution].Tables_in_mediaplayer);
      //res.json({ message: 'hooray! welcome to our api!' });
      var dbdata = 'Table ' + solution + ': ' + rows[solution].Tables_in_mediaplayer;
      res.json({ message: dbdata});
    }
  });

  connection.end();
});

// more routes for our API will happen here
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

app.use(express.static(__dirname + '/'));

// START THE SERVER
// =============================================================================
app.listen(port, ipaddress);
console.log('Magic happens on ' + 'http://' + ipaddress +':'+ port);