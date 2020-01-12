import React, {useState} from 'react';
import Book from './book/Book.jsx';

function App() {
  const [title, setTitle] = useState('Buku')
  const changeHandler = e => {
    setTitle(e.target.value)
  }
  return (
    <div>
      <h1>Head</h1>
      <input type="text" onChange={changeHandler} value={title} placeholder="Judul" />
      <Book title={title} />
    </div>
  );
}

export default App;
