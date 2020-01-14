import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Book(props) {
  const name = useFormInput('')
  const phone = useFormInput('')
  const email = useFormInput('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const kotak = {
    paddingTop: '10px',
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  const onSubmit = () => {
    const params = {
      name,
      phone,
      email,
    }
    axios
      .post('https://jsonplaceholder.typicode.com/users', params)
      .then((res) => {
        console.log({res, msg: 'success'})
      })
      .catch((e) => console.error({e}))
  }

  return (
    <div>
      <h1>Daftar Buku</h1>
      <input type="text" placeholder="John Smith" {...name} />
      <input type="Phone Number" placeholder="xxx-xxx-xxx" {...phone} />
      <input type="email" placeholder="foo@mail.com" {...email} />
      <button onClick={() => onSubmit()}>submit</button>
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

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  function onChange(e) {
    setValue(e.target.value)
  }

  return {value, onChange}
}

export default Book
