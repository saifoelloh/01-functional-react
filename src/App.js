import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DefaultLayout from './layouts'
import {Book, User} from './pages'

function App() {
  const home = <h1>Home sweet Home</h1>
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DefaultLayout page={home} />
        </Route>
        <Route path="/book">
          <DefaultLayout page={<Book />} />
        </Route>
        <Route path="/user">
          <DefaultLayout page={<User />} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
