import formatDataToLocalStrings from '../helpers/formatDataToLocalStrings.js'
import i18next from 'i18next'

function normalizeAnime(anime) {
  const lang = i18next.language
  return formatDataToLocalStrings(anime, lang)
}

export default normalizeAnime
