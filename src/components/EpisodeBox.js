import { Link } from 'react-router-dom'
import React from 'react'

function EpisodeBox({ episode }) {
  return (
    <Link className='anime_box' to={`/watch/${episode.animeId}?episode=${episode.episodeId}`}>
      <div className='anime_box__image' style={{backgroundImage: `url(${episode.poster})`}} />
      <div className='anime_box__heading'>
        {episode.name}
      </div>
    </Link>
  )
}

export default EpisodeBox
