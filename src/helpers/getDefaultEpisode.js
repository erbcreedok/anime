function getDefaultEpisodeId(anime) {
  if (!anime.episodes) {
    return anime.movie.id
  }
  return anime.episodes[0].episodes[0].episodeId
}

export default getDefaultEpisodeId
