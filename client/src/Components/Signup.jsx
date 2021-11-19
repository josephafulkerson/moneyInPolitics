import React, {useState} from 'react'
import {  Redirect, useHistory, Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
                history.push('/')
              })
            } else {
              res.json().then(errors => {
                console.error(errors)
                alert('Yo, something is wrong on server side')
                  // history.push("/home");
              })
            }
          })
      }
     
    
    return (
        <div>
         
            <form onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <TextField label="Username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}>
                {/* <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/> */}
                </TextField>
                <TextField label="Password" type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)}>
                {/* <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)}/> */}
                </TextField>
                <TextField label=" Confirm Password" type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}>
                {/* <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/> */}
                </TextField>
                <Button size="small" variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Signup
