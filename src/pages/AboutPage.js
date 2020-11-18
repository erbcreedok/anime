import React from 'react'
import HomeLayout from '../layouts/HomeLayout.js'
import { Trans } from 'react-i18next'

function AboutPage() {
  return (
    <HomeLayout>
      <div className="container my-5 about_page">
        <h1>О нас</h1>
        <p className='label-l mt-4'>
          <Trans i18nKey='about' ns='about' components={[<span className='color-yellow' />]} />
        </p>
      </div>
    </HomeLayout>
  )
}

export default AboutPage
