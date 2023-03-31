//TMDB Library
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a5320afe4b8da043225cea23c0eb7d80";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=a5320afe4b8da043225cea23c0eb7d80&query=";

const searchBtn = document.getElementById("search-Btn");
const Search = document.getElementById("search");
const main = document.getElementById("main");

//get Movies
getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data.results);
  console.log(data.results);
}

function displayMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const moviesElement = document.createElement("div");
    moviesElement.classList.add("movie");
    moviesElement.innerHTML = `
    <img src = "${IMAGE_PATH + poster_path}" alt="${title}" >
     <div class ='movie-info'>
    <h3>${title}</h3>
    <span class="${getClassByRating(vote_average)}"> ${vote_average}</span> 
    </div>  `;
    main.appendChild(moviesElement);
  });
}
//change color of rating Movies
function getClassByRating(rating) {
  if (rating >= 8) {
    return "green";
  } else if (rating >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function onSearch(position) {
  console.log(position);
  const searchInput = Search.value;
  if (searchInput && searchInput !== "") {
    getMovies(SEARCH_URL + position);
    searchInput = "";
  } else {
    window.location.reload();
  }
}
