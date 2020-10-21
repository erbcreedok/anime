import React from 'react'
import HomeLayout from '../layouts/HomeLayout.js'
import SliderSection from '../sections/SliderSection/SliderSection.js'
import PopularAnimes from '../components/PopularAnimes.js'


function HomePage() {

  return (
    <HomeLayout stickyTransparent>
      <SliderSection />
      <PopularAnimes title='Популярные аниме' className='my-5' />
      <PopularAnimes title='Онгоинги' className='my-5' />
    </HomeLayout>
  )
}

export default HomePage
