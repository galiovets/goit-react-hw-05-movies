const API_KEY = '5eedd9576ab43a008551d36a9f8b0c8a';
const BASE_URL = 'https://api.themoviedb.org/3';

export function getTrending() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

export function searchMovie(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}`,
  )
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

export function getMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

export function getMovieCredits(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

export function getMovieReviews(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}
