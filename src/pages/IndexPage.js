import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import LazyComponent from '../components/LazyComponent.js'

function IndexPage() {
  return (
    <Switch>
      <Route path='/home' component={LazyComponent(() =>import('./HomePage.js'))} />} />
      <Redirect path='/' exact to='/home' />
      <Route path='*' component={LazyComponent(() => import('./NotFoundPage.js'))} />} />
    </Switch>
  )
}

export default IndexPage
