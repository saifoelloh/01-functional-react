import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

function DefaultLayout(props) {
  useEffect(() => {
    const {page} = props
    console.log({page})
  })
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </header>
      <main>{props.page}</main>
    </div>
  )
}

export default DefaultLayout
