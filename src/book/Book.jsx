import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function Book(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const kotak = {
    paddingTop: '10px',
  }
  const [btn, setBtn] = useState(true)

  useEffect(() => {
    if (loading) {
      setInterval(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
            setUsers(res.data)
            setLoading(!loading)
          })
          .catch(console.error)
      }, 5000)
    }
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
      {loading
        ? 'Ambil data mas bro!'
        : users.map((datum, index) => {
            return (
              <div key={index} style={kotak}>
                <p>Name : {datum.name}</p>
                <p>Email : {datum.email}</p>
                <p>Phone : {datum.phone}</p>
              </div>
            )
          })}
    </div>
  )
}

export default Book
