import ContainerScroller from './ContainerScroller.js'
import AnimeBox from './AnimeBox.js'
import React, { useEffect, useState } from 'react'
import getRelatedAnimes from '../localServer/getters/getRelatedAnimes.js'

function RelatedAnimes({title = 'Похожие аниме', animeId, ...props}) {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    setAnimes(getRelatedAnimes(animeId))
  }, [animeId])

  return (
    <div {...props}>
      <div className="container">
        <div className='mb-4 d-flex align-items-center'>
          <h2>{title}</h2>
        </div>
      </div>
      <ContainerScroller className="anime_box__row">
        {animes.map((anime, index) => (
          <AnimeBox key={index} anime={anime} />
        ))}
      </ContainerScroller>
    </div>
  )
}

export default RelatedAnimes
