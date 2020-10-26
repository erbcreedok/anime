import sliderData from '../localDatabase/sliderData.js'
import formatDataToLocalStrings from '../helpers/formatDataToLocalStrings.js'
import i18next from 'i18next'

function fetchSlides() {
  const lang = i18next.language
  return sliderData.map((slide) => formatDataToLocalStrings(slide, lang))
}

export default fetchSlides
