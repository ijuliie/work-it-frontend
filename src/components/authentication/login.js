import React, { useState, useContext } from 'react'
import { userLogin } from '../../services/api-helper'
import { WorkoutContext } from '../../App'
import { Form } from 'react-bootstrap'

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

        <input 
            name="username"
            value={ login.username } 
            onChange={ handleChange } 
            placeholder="Username" 
         />

        <input 
            name="password" 
            alue={ login.password } 
            onChange={ handleChange } 
            placeholder="Password" 
        />

        <input type="Submit" value="Submit" />
    </Form>
    )
}