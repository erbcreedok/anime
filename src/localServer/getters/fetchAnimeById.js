import normalizeAnime from '../normalizers/normalizeAnime.js'
import { getAnimeById } from '../localDatabase/animes.js'

function fetchAnimeById(id) {
  return normalizeAnime(getAnimeById(id))
}

export default fetchAnimeById
