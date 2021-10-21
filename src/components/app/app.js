import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../header'
import { routes } from '../../router'
import { v4 as uuidv4 } from 'uuid'

import './app.scss'

const App = () => {
  return (
    <main className='container'>
      <Header />
      <Switch>
        {routes.map(route =>
          <Route key={uuidv4()} path={route.path} component={route.component} exact={route.exact} />
        )}
        <Redirect to='/' />
      </Switch>
    </main>
  )
}

export default App
