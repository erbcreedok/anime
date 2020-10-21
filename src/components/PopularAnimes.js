import ContainerScroller from './ContainerScroller.js'
import AnimeBox from './AnimeBox.js'
import React, { useEffect, useState } from 'react'
import getPopularAnimes from '../localServer/getters/getPopularAnimes.js'

function PopularAnimes({title = 'Популярные аниме', ...props}) {
  const [popularAnimes, setPopularAnimes] = useState([])

  useEffect(() => {
    setPopularAnimes(getPopularAnimes())
  }, [])

  return (
    <div {...props}>
      <div className="container">
        <div className='mb-4 d-flex align-items-center'>
          <h2>{title}</h2>
        </div>
      </div>
      <ContainerScroller className="anime_box__row">
        {popularAnimes.map((anime, index) => (
          <AnimeBox key={index} anime={anime} />
        ))}
      </ContainerScroller>
    </div>
  )
}

export default PopularAnimes
