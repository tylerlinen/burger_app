// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();
var connection;

if(process.env.burgerDB){
connection = mysql.createConnection(process.env.burgerDB)
}
else{
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.mysqlpassword,
  database: `m4t3d5g4lsp6c8wv`
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
