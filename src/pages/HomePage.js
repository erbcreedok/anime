import React from 'react'
import HomeLayout from '../layouts/HomeLayout.js'
import AnimeBox from '../components/AnimeBox.js'
import SliderSection from '../sections/SliderSection/SliderSection.js'
import ContainerScroller from '../components/ContainerScroller.js'

const ANIMES = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,]

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
          <AnimeBox key={index} />
        ))}
      </ContainerScroller>
    </HomeLayout>
  )
}

export default HomePage
