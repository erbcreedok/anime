import React, { useState } from 'react'
import { Nav } from 'rsuite'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
import ContainerScroller from './ContainerScroller.js'
import EpisodeBox from './EpisodeBox.js'
import { useTranslation } from 'react-i18next'

function AnimeEpisodes({ episodes, ...props }) {
  const { t } = useTranslation()
  const [tab, setTab] = useState(episodes[0].season)
  const selectedSeason = episodes.find((season) => season.season === tab)
  return (
    <div className={inheritPropClassName(props,'anime_episodes')}>
      <div className="container">
        <h2 className='anime_episodes__heading'>{t('episodes')}</h2>
        <div className="d-flex align-items-center my-3 anime_episodes__seasons">
          <span className='mr-3'>{t('seasons')}</span>
          <Nav onSelect={setTab} activeKey={tab} className='nav_tabs '>
            {episodes.map((season) => (<Nav.Item key={season.season} eventKey={season.season}>{season.season}</Nav.Item>))}
          </Nav>
        </div>
      </div>
      {selectedSeason && (
        <ContainerScroller className='anime_box__row'>
          {selectedSeason.episodes.map((episode, index) => <EpisodeBox key={index} episode={episode} />)}
        </ContainerScroller>
      )}
    </div>
  )
}

export default AnimeEpisodes
