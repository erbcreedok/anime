import animes from '../localDatabase/animes.js'

function getRelatedAnimes(animeId) {
  return [
    ...animes.filter((a) => a.id !== animeId),
    ...animes.filter((a) => a.id !== animeId),
    ...animes.filter((a) => a.id !== animeId),
  ]
}

export default getRelatedAnimes
