var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'Xenophobia',
  database: 'Might-Auth',
});
  
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting to the database:", err);
    // Handle the error here or perform any necessary cleanup
    // For example, you might want to gracefully exit the application
    process.exit(1); // Exit the Node.js process with a non-zero status code
  }
  console.log("Connected!");
});

var username = document.getElementById('username').value;
var firstName = document.getElementById('fName').value;
var lastName = document.getElementById('lName').value;
var pWord= document.getElementById("password");
var email = document.getElementById("email");

var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('"+username+ "', '"+firstName+"','"+lastName+"','"+email+"','"+pWord+"')";
con.query(sql, function (err, result) {
    if (err) {
        throw err;

    }

    console.log(result.affectedRows + " record(s) updated");
  });


