import { getAnimeById } from './animes.js'

const sliderData = [
  {
    animeId: '1',
    color: '#6573d0',
  },
  {
    animeId: '2',
  },
  {
    animeId: '3',
    color: '#878787'
  },
]

function normalizeSliderData(array) {
  return array.map((slide) => {
    const anime = getAnimeById(slide.animeId)
    return {
      logo: anime.logoImage,
      title: anime.name,
      description: anime.shortInfo,
      img: anime.backgroundImage,
      video: anime.backgroundVideo,
      ...slide,
    }
  })
}

export default normalizeSliderData(sliderData)
