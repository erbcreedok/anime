function getAnimeEpisodeById(anime, episodeId) {
  let episode = null
  anime.episodes.find((season) => {
    return season.episodes.find((e) => {
      if (e.episodeId === episodeId) {
        episode = e
        return true
      }
      return false
    })
  })
  return episode
}

export default getAnimeEpisodeById
