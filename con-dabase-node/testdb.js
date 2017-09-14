var mysql = require('mysql');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up connection to database.
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'users',
});

// Connect to database.

// Listen to POST requests to /users.

app.post('/users', function(req, res) {

  var querys = connection.query("INSERT INTO users values( null,'"+req.body.name+"','"+req.body.job+"')", function(err, result) {
    if (err) throw err;
    console.log(result);
   
  });

   res.end('Success');
});

app.post('/showusers', function(req, res) {
  console.log("")
  /*var query2=connection.query("SELECT *  FROM users",function(err, result,fields){
    if (err) {throw err;}
      else {
        
       console.log(result[0].solution)
        res.json(result);}  
           
      
    

  });*/
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.setResponseHeader('Access-Control-Allow-Headers', '*');
      res.setResponseHeader('Content-Type', 'application/json');
      res.setResponseHeader('Access-Control-Allow-Origin', '*');

      res.send(result);
     


    });
  });
   
     res.end('success');
  });


app.listen(9000, function() {
  console.log('Example app listening on port 9000!');
});