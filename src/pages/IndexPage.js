import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router'
import LazyComponent from '../components/LazyComponent.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function IndexPage() {
  const location = useLocation()

  let background = location.state && location.state.from;
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames='fade' timeout={150}>
          <Switch location={background || location}>
            <Route path='/home' component={LazyComponent(() =>import('./HomePage.js'))} />} />
            <Route path='/anime/:id' component={LazyComponent(() =>import('./AnimeInfoPage.js'))} />} />
            <Route path='/watch/:id' component={LazyComponent(() =>import('./WatchPage.js'))} />} />
            <Route path='/login' component={LazyComponent(() =>import('./LoginPage.js'))} />} />
            <Route path='/register' component={LazyComponent(() =>import('./RegisterPage.js'))} />} />
            <Redirect path='/' exact to='/home' />
            <Route path='*' component={LazyComponent(() => import('./NotFoundPage.js'))} />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      {background && <Route path='/login' component={LazyComponent(() =>import('./LoginModalPage.js'))} />}
      {background && <Route path='/register' component={LazyComponent(() =>import('./RegisterModalPage.js'))} />}
    </>
  )
}

export default IndexPage
