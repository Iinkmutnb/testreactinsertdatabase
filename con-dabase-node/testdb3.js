var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000; 
var router = express.Router(); 
/*
router.post('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/showusers', router);

app.listen(port);*/

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'users',
  });


var router = express.Router();              


router.use(function(req, res, next) {
   
    console.log('Something is happening.');
    next(); 
});



router.route('/showusers').post(function(req, res) {
    connection.query("SELECT "+req.body.name+" FROM users", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(result);
       });
           })

 router.route('/insertusers').post(function(req, res) {
    connection.query("INSERT INTO users values( null,'"+req.body.name+"','"+req.body.job+"')", function (err, result, fields) {
        if (err) throw err;
                console.log(result);
                //res.setHeader('Access-Control-Allow-Origin', '*');
                //res.json(result);
               });
                   })



app.use('/', router);
app.listen(port);