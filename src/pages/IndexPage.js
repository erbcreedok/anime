import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router'
import LazyComponent from '../components/LazyComponent.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function IndexPage() {
  const location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames='fade' timeout={150}>
        <Switch>
          <Route path='/home' component={LazyComponent(() =>import('./HomePage.js'))} />} />
          <Route path='/anime/:id' component={LazyComponent(() =>import('./AnimeInfoPage.js'))} />} />
          <Redirect path='/' exact to='/home' />
          <Route path='*' component={LazyComponent(() => import('./NotFoundPage.js'))} />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default IndexPage
