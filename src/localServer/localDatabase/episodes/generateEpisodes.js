function generateEpisodes(animeId, seasons) {
  return seasons.map((episodes, seasonIndex) => (
    {
      animeId,
      season: seasonIndex+1+'',
      episodes: episodes.map((episode, episodeIndex) => (
        {
          animeId,
          episode: episodeIndex+1+'',
          season: seasonIndex+1+'',
          episodeId: `${seasonIndex+1}-${episodeIndex+1}`,
          name: episode.name,
          poster: episode.poster,
          media: {
            video: episode.video,
          },
        }
      ))
    }
  ))

}

export default generateEpisodes
