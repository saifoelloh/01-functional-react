import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const DefaultLayout = lazy(() => import('./layouts/default-layout'))
const Book = lazy(() => import('./pages/book'))
const User = lazy(() => import('./pages/user'))

const App = () => {
  const hello = <h1>hello</h1>
  return (
    <Router>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <DefaultLayout page={hello} />
          </Route>
          <Route path="/book">
            <DefaultLayout page={<Book />} />
          </Route>
          <Route path="/user">
            <DefaultLayout page={<User />} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
