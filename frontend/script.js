const API_KEY = "505ec6223740fa8bdd9b4eb7b67fbdd3";

const moviesContainer = document.getElementById("movies");

// 🔥 Películas populares
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-MX&page=1`)
  .then(res => res.json())
  .then(data => mostrarPeliculas(data.results));

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

        </div>

      </div>
    `;
  });
}
function buscarPeliculas() {

  const texto = document.getElementById("search").value;

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${texto}`)
    .then(res => res.json())
    .then(data => mostrarPeliculas(data.results));

}