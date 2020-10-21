import animes from '../localDatabase/animes.js'

function getPopularAnimes() {
  return [
    ...animes,
    ...animes,
    ...animes,
  ]
}

export default getPopularAnimes
