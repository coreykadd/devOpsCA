require('./config/config'); //Init config variables

const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : CONFIG.RDS_HOSTNAME,
    user     : CONFIG.RDS_USERNAME,
    password : CONFIG.RDS_PASSWORD,
    port     : CONFIG.RDS_PORT
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });

  module.exports = connection;