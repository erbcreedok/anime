import React from 'react'
import HomeLayout from '../layouts/HomeLayout.js'
import AnimeBox from '../components/AnimeBox.js'
import SliderSection from '../sections/SliderSection/SliderSection.js'
import ContainerScroller from '../components/ContainerScroller.js'
import animes from '../localServer/localDatabase/animes.js'

const ANIMES = [...animes, ...animes, ...animes, ...animes, ...animes]

function HomePage() {
  return (
    <HomeLayout stickyTransparent>
      <SliderSection />
      <div className="container">
        <div className='mt-5 mb-4 d-flex align-items-center'>
          <h2>Популярные аниме</h2>
        </div>
      </div>
      <ContainerScroller className="anime_box__row">
        {ANIMES.map((anime, index) => (
          <AnimeBox key={index} anime={anime} />
        ))}
      </ContainerScroller>
    </HomeLayout>
  )
}

export default HomePage
