var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'users',
  });

  app.post('/showusers', function(req, res) {
   
    /*var query2=connection.query("SELECT *  FROM users",function(err, result,fields){
      if (err) {throw err;}
        else {
          
         console.log(result[0].solution)
          res.json(result);}  
             
        
      
  
    });*/
    
   /* connection.connect(function(err) {
      if (err) throw err;
      connection.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        
        //res.status(200).send(JSON.stringify(result.toString()));  
        //res.send("sdsdsd")
        res.send(result);  
        
      
 
  
      });
    });*/

    function fetchAllUsers(callback){
      connection.query("SELECT * FROM users", function (err, result, fields) {
        if(err){
          
          callback(err,null);
        }else{
          callback(null,result)

        }
      });

    }
    fetchAllUsers(function(err,result){
      if(err){
        res.send(err);
      }else{
        console.log(result);
      res.json(result);
     

      }
    })
    
      
    });

    app.listen(9000, function() {
        console.log('Example app listening on port 9000!');
      });