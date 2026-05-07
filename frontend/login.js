const API_URL = "http://localhost:3000/api";

// 🔐 LOGIN
function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API_URL}/login`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      email,
      password
    })

  })

  .then(res => res.json())

  .then(data => {

    if (data.success) {

      document.getElementById("mensaje").innerText =
        "Login exitoso 😎";

      window.location.href = "index.html";

    } else {

      document.getElementById("mensaje").innerText =
        data.message;

    }

  });

}


// 🟢 REGISTRO
function register() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API_URL}/register`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      email,
      password
    })

  })

  .then(res => res.text())

  .then(data => {

    document.getElementById("mensaje").innerText = data;

  });

}