var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fooddeliverydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sampleTable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});











  //database: fooddeliverydb
  //host: "localhost",
  //user: "root",
  //password: "",
