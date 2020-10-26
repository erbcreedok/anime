import animes from '../localDatabase/animes.js'
import normalizeAnime from '../normalizers/normalizeAnime.js'

function getRelatedAnimes(animeId) {
  return [
    ...animes.filter((a) => a.id !== animeId),
    ...animes.filter((a) => a.id !== animeId),
    ...animes.filter((a) => a.id !== animeId),
  ].map(normalizeAnime)
}

export default getRelatedAnimes
