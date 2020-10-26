import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import LazyComponent from '../components/LazyComponent.js'

function IndexPage() {
  return (
    <>
      <Switch>
        <Route path='/home' component={LazyComponent(() =>import('./HomePage.js'))} />} />
        <Route path='/anime/:id' component={LazyComponent(() =>import('./AnimeInfoPage.js'))} />} />
        <Route path='/watch/:id' component={LazyComponent(() =>import('./WatchPage.js'))} />} />
        <Route path='/login' component={LazyComponent(() =>import('./LoginPage.js'))} />} />
        <Route path='/register' component={LazyComponent(() =>import('./RegisterPage.js'))} />} />
        <Redirect path='/' exact to='/home' />
        <Route path='*' component={LazyComponent(() => import('./NotFoundPage.js'))} />} />
      </Switch>
    </>
  )
}

export default IndexPage
