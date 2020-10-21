import React from 'react'
import { Link } from 'react-router-dom'

function AnimeBox({ anime }) {
  return (
    <Link className='anime_box' to={'/anime/' + anime.id}>
      <div className='anime_box__image' style={{backgroundImage: `url(${anime.poster})`}} />
      <div className='anime_box__heading'>
        {anime.name}
      </div>
    </Link>
  )
}

export default AnimeBox
