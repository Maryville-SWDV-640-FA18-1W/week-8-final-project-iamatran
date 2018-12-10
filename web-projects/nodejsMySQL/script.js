
//my attempt to connect a mySQL database using nodeJS - got a connection error - need to do more testing


//w3 schools tutorial

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "foodDeliverydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sampleTable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});























/* - youtube tutorial not working
var express = require('express');
var mysql = require('mysql');
var app = express();

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'foodDeliveryDB',

})


connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});


app.get('/', function(req, resp) {
    connection.query("SELECT * FROM sampleTable", function(error, rows, fields){
        if(!!error) {
            console.log('Error in the query');
        } else{
            console.log('Successful query');
        }
    });
})


*/

app.listen(3306);
