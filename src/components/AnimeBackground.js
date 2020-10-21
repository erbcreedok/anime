import React from 'react'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
import modifyClass from '../helpers/modifyClass.js'

function AnimeBackground({anime, isBlurred, ...props}) {

  return (
    <div className={inheritPropClassName(props, modifyClass('anime_background', {'is_blurred': isBlurred}))}>
      <div className="anime_background__shadow" />
      <div className="anime_background__content">
        {anime.backgroundImage && <img src={anime.backgroundImage} alt='' />}
      </div>
    </div>
  )
}

export default AnimeBackground
