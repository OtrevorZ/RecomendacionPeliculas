const express = require("express");
const router = express.Router();

const db = require("./db");

// 🟢 REGISTRO
router.post("/register", (req, res) => {

  const { email, password } = req.body;

  const query = `
    INSERT INTO usuarios (email, password)
    VALUES (?, ?)
  `;

  db.query(query, [email, password], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error al registrar");
    }

    res.send("Usuario registrado");
  });
});


// 🔐 LOGIN
router.post("/login", (req, res) => {

  const { email, password } = req.body;

  const query = `
    SELECT * FROM usuarios
    WHERE email = ? AND password = ?
  `;

  db.query(query, [email, password], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error en login");
    }

    if (result.length > 0) {

      res.json({
        success: true,
        user: result[0]
      });

    } else {

      res.json({
        success: false,
        message: "Credenciales incorrectas"
      });

    }

  });

});

module.exports = router;