import React  from 'react'

function Player({ media }) {
  const iframe = media.iframe
  const video = media.video
  return (
    <div className='player'>
      {iframe && video && (<iframe src={iframe} className='player__iframe' title='anime' width='100%' height='100%' allowFullScreen />)}
      {video && (
        <video src={video} className='player__player' width='100%' height='100%' autoPlay controls />
      )}
    </div>
  )
}

export default Player
