var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    connectionLimit: 100,
    waitForConnections: true,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db",
    wait_timeout: 28800,
    connect_timeout: 10
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("listening on localhost:" + connection.threadId);
});

module.exports = connection;
