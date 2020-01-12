import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function Book(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const kotak = {
    padding: '50px',
    backgroundColor: 'lightblue',
  }
  const [btn, setBtn] = useState(true)
  const card = (
    <div style={kotak}>
      <p>Nama = {name}</p>
      <p>Umur = {age}</p>
      <p>Email = {email}</p>
    </div>
  )

  useEffect(() => {
    setInterval(() => {
      Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          const datum = res.data[0]
          setName(datum.name)
          setAge(datum.id)
          setEmail(datum.email)
        })
        .catch(console.error)
    }, 5000)
  })

  return (
    <div>
      <h1>Form | {props.title}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Smith"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="25"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="foo@mail.com"
      />
      <button onClick={(e) => setBtn(!btn)}>tekan</button>
      {btn ? 'foo' : card}
    </div>
  )
}

export default Book
