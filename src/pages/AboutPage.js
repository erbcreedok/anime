import React from 'react'
import HomeLayout from '../layouts/HomeLayout.js'
import { Trans, useTranslation } from 'react-i18next'

function AboutPage() {
  const { t } = useTranslation()
  return (
    <HomeLayout>
      <div className="container my-5 about_page">
        <h1>{t('about')}</h1>
        <p className='label-l mt-4'>
          <Trans i18nKey='about' ns='about' components={[<span className='color-yellow' />]} />
        </p>
      </div>
    </HomeLayout>
  )
}

export default AboutPage
