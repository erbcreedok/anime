import React from 'react'
import HomeLayout from '../layouts/HomeLayout.js'
import SliderSection from '../sections/SliderSection/SliderSection.js'
import PopularAnimes from '../components/PopularAnimes.js'
import { useTranslation } from 'react-i18next'


function HomePage() {
  const { t } = useTranslation()

  return (
    <HomeLayout stickyTransparent>
      <SliderSection />
      <PopularAnimes title={t('popular anime')} className='my-5' />
      <PopularAnimes title={t('ongoings')} className='my-5' />
    </HomeLayout>
  )
}

export default HomePage
