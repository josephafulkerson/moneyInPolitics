import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
const Signup = ({setCurrentUser}) => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation
          })
        })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                setCurrentUser(user)
              })
            } else {
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password</label>
                <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Confirm Password</label>
                <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Signup
