import React from 'react'
import Book from './book/Book.jsx'

function App() {
  const title = 'User List'
  return (
    <div>
      <h1>Head</h1>
      <Book title={title} />
    </div>
  )
}

export default App
