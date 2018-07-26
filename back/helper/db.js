const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jecode4wcs',
  database : 'album'
});

connection.connect(function(err){
  if(!err) {
      console.log("Database is connected");
  } else {
      console.log("Error while connecting with database");
  }
  });
module.exports  =  connection;

// mon connecteur de base de donnée est const connection = require('./helpers/db.js'); que je peux utiliser de partout