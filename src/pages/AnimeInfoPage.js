import React, { useState } from 'react'
import HomeLayout from '../layouts/HomeLayout.js'
import AnimeBackground from '../components/AnimeBackground.js'
import useRouteParam from '../hooks/useRouteParam.js'
import { getAnimeById } from '../localServer/localDatabase/animes.js'
import modifyClass from '../helpers/modifyClass.js'
import { Button, ButtonToolbar, Icon, IconButton, Nav } from 'rsuite'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TAB_MAIN = 'TAB_MAIN'
const TAB_INFO = 'TAB_INFO'

function AnimeInfoPage() {
  const animeId = useRouteParam('id')
  const anime = getAnimeById(animeId)

  const [tab, setTab] = useState(TAB_MAIN)

  if (!anime) {
    console.log(animeId)
    return <>Loading</>
  }
  return (
    <HomeLayout>
      <div className="anime_info">
        <AnimeBackground anime={anime} isBlurred={tab!==TAB_MAIN} />
        <div className="container">
          <Nav activeKey={tab} onSelect={setTab} className='anime_info__tabs'>
            <Nav.Item eventKey={TAB_MAIN}>Об аниме</Nav.Item>
            <Nav.Item eventKey={TAB_INFO}>Подробнее</Nav.Item>
          </Nav>
          <div className={modifyClass('anime_info__heading', {'logo_visible': anime.logoImage, 'shorten': tab!==TAB_MAIN})}>
            {anime.logoImage ? (
              <img src={anime.logoImage} alt={anime.name} />
            ) : (
              <h1>{anime.name}</h1>
            )}
          </div>
        </div>
        <TransitionGroup>
          <CSSTransition classNames='scale'
                         key={tab}
                         timeout={150}
          >
            <div className='container'>
            {tab === TAB_MAIN && (
              <>
                <p className='anime_info__description'>{anime.shortInfo}</p>
                <div className="d-flex wide_slide__buttons">
                  <ButtonToolbar>
                    <Button className='btn-scale' color='red' size='lg'><Icon icon='play' className='mr-2'/> Смотреть</Button>
                    <IconButton className='btn-scale' appearance='subtle' size='lg' icon={<Icon icon='heart' />} />
                  </ButtonToolbar>
                </div>
              </>
            )}
            {tab === TAB_INFO && (
              <>
                <div className="row">
                  <div className="col-lg-6">
                    <p className='anime_info__full_description'>{anime.info}</p>
                  </div>
                  {anime.detail && (
                    <div className="col-lg-6">
                      {
                        anime.detail.map((detail, index) => (
                          <div key={index}>
                            <span className="anime_info__label">{detail.label}</span>
                            <span className='anime_info__value'>{detail.value}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              </>
            )}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      {/*<>*/}
      {/*  <div className="container">*/}
      {/*    <h2>Эпизоды</h2>*/}
      {/*  </div>*/}
      {/*  <ContainerScroller className='anime_box__row'>*/}
      {/*    /!*{[0,1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,2].map((index) => <AnimeBox key={index}/>)}*!/*/}
      {/*  </ContainerScroller>*/}
      {/*</>*/}
    </HomeLayout>
  )
}

export default AnimeInfoPage