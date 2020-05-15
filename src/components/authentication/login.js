import React, { useState, useContext } from 'react'
import { userLogin } from '../../services/api-helper'
import { WorkoutContext } from '../../App'
import { Form } from 'react-bootstrap'
import './login.scss'

export default function Login(){
    const workoutContext = useContext(WorkoutContext)
    const [login, setLogin] = useState({
            username: '',
            password: ''
        })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await userLogin(login).then(response => {
            if(response.token){
                workoutContext.setUser(response.token)

                workoutContext.setLoggedIn(true)
            }
        })
        setLogin({
            username: '',
            password: ''
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setLogin({...login, [e.target.name]: value})
     }

    return(
        <Form onSubmit={ handleSubmit }>
        
        <div className='label'>
            <label>Username:</label>
        </div>
        <Form.Control 
            name="username"
            value={ login.username } 
            onChange={ handleChange } 
         />

        <div className='label'>
            <label>Password:</label>
        </div>
        <Form.Control  
            name="password" 
            alue={ login.password } 
            onChange={ handleChange } 
        />

        <input className='login-submit' type="Submit" value="Login" />
    </Form>
    )
}