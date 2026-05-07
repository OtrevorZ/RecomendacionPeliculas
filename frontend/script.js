const API_KEY = "505ec6223740fa8bdd9b4eb7b67fbdd3";

const moviesContainer = document.getElementById("movies");


// 🔥 CARGAR PELÍCULAS POPULARES
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-MX&page=1`)
  .then(res => res.json())
  .then(data => mostrarPeliculas(data.results));


// 🎬 MOSTRAR PELÍCULAS
function mostrarPeliculas(peliculas) {

  moviesContainer.innerHTML = "";

  peliculas.forEach(movie => {

    moviesContainer.innerHTML += `
      <div class="card">

        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">

        <div class="card-content">

          <h3>${movie.title}</h3>

          <p class="rating">
            ⭐ ${movie.vote_average}
          </p>

          <p>
            ${movie.overview.substring(0, 100)}...
          </p>

          <button 
            onclick='agregarFavorito(
              ${movie.id},
              ${JSON.stringify(movie.title)},
              ${JSON.stringify(movie.poster_path)}
            )'
          >
            ❤️ Favorito
          </button>

        </div>

      </div>
    `;
  });
}


// 🔎 BUSCAR PELÍCULAS
function BuscarPeliculas() {

  const texto = document.getElementById("search").value;

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${texto}`)
    .then(res => res.json())
    .then(data => mostrarPeliculas(data.results));

}


// ❤️ AGREGAR A FAVORITOS
function agregarFavorito(id, titulo, poster) {

  fetch("http://localhost:3000/api/favoritos", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      usuario_id: 1,
      pelicula_id: id,
      titulo,
      poster
    })

  })

  .then(res => res.text())

  .then(data => {
    alert(data);
  })

  .catch(error => {
    console.error(error);
    alert("Error al agregar favorito");
  });

}