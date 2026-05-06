const express = require("express");
const router = express.Router();
const sql = require("mssql");

// 🟢 REGISTRO
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    await sql.query`
      INSERT INTO usuarios (email, password)
      VALUES (${email}, ${password})
    `;

    res.send("Usuario registrado");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al registrar");
  }
});


// 🔐 LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await sql.query`
      SELECT * FROM usuarios 
      WHERE email = ${email} AND password = ${password}
    `;

    if (result.recordset.length > 0) {
      res.json({ success: true, user: result.recordset[0] });
    } else {
      res.json({ success: false, message: "Credenciales incorrectas" });
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Error en login");
  }
});

module.exports = router;