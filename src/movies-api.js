import axios from "axios";

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmI0YTQyZWM2ZWY2ZjI4OWE3MGYxYjdjYWUwMmY5YiIsInN1YiI6IjY2MWJjM2Y4NWUxNGU1MDE4NWJiODU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xSaIumc-iXBro5Q7Q3dq5gQ5wrmGZ2jSDpkfO6wOy0o'
  }
};

export async function fetchTrendingMovies(page) {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
  const response = await axios.get(url, options);
  const data = response.data;
  return data;
}

export async function fetchMovieDetailsById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, options);
  const movieDetailsById = response.data;
  return movieDetailsById;
}

  export async function fetchMovieCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url, options);
  const movieCasts = response.data.cast;
  return movieCasts;
}

  export async function fetchMovieReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;
  const response = await axios.get(url, options);
  const movieReviews = response.data.results;
  return movieReviews;
}


    export async function fetchMovieSearch(inputSearch,page) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${inputSearch}&include_adult=false&language=en-US&page=${page}`;
  const response = await axios.get(url, options);
      const movieReviews = response.data;
  return movieReviews;
}