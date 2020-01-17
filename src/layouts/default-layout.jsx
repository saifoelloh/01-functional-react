import {AppBar, Button, Toolbar} from '@material-ui/core'
import {Book, Group, Home} from '@material-ui/icons'
import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'

function DefaultLayout(props) {
  useEffect(() => {
    const {page} = props
    console.log({page})
  })
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button>
              <Home />
              Home
            </Button>
          </Link>
          <Link to="/book">
            <Button>
              <Book /> Book
            </Button>
          </Link>
          <Link to="/user">
            <Button>
              <Group /> User
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main>{props.page}</main>
    </Fragment>
  )
}

export default DefaultLayout
