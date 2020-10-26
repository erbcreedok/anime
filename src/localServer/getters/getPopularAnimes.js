import animes from '../localDatabase/animes.js'
import normalizeAnime from '../normalizers/normalizeAnime.js'

function getPopularAnimes() {
  return [
    ...animes,
    ...animes,
    ...animes,
  ].map(normalizeAnime)
}

export default getPopularAnimes
