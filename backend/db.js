const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mawile_303",
  database: "moviehub"
});

db.connect(err => {
  if (err) {
    console.error("Error de conexión:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

module.exports = db;