import React, { useEffect, useState } from 'react'
import { getAnimeById } from '../localServer/localDatabase/animes.js'
import Player from '../components/Player.js'
import NotFoundPage from './NotFoundPage.js'
import useQuery from '../hooks/useQuery.js'
import { useHistory, useParams } from 'react-router'
import getDefaultEpisodeId from '../helpers/getDefaultEpisode.js'
import getAnimeEpisodeById from '../helpers/getAnimeEpisodeById.js'
import FullScreenLayout from '../layouts/FullScreenLayout.js'
import { Icon, IconButton } from 'rsuite'
import { Link } from 'react-router-dom'

function WatchPage() {
  const history = useHistory()
  const animeId = useParams().id
  const episodeId = useQuery('episode')
  const anime = getAnimeById(animeId)
  const [media, setMedia] = useState(null)

  useEffect(() => {
    if (!anime) return
    if (anime.episodes && !episodeId) {
      const episodeId = getDefaultEpisodeId(anime)
      history.push(`?episode=${episodeId}`)
    } else if (anime.episodes) {
      const episode = getAnimeEpisodeById(anime, episodeId)
      setMedia(episode.media)
    } else {
      setMedia(anime.media)
    }
  }, [anime, episodeId, history])

  if (!media) {
    return <NotFoundPage />
  }

  return (
    <FullScreenLayout withHeader>
      <Player media={media} />
      <div className="watch_page__close_button">
        <IconButton componentClass={Link} to={'/anime/' + animeId} size='lg' icon={<Icon icon='close' size='2x' />} appearance='subtle' />
      </div>
    </FullScreenLayout>
  )
}

export default WatchPage
