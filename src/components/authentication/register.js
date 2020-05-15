import React, { useState, useContext } from 'react'
import { registerNewUser } from '../../services/api-helper'
import { WorkoutContext } from '../../App'
import { Form } from 'react-bootstrap'
import './../../styles.scss'
import './register.scss'

export default function Register(props) {
    const workoutContext = useContext(WorkoutContext)
    console.log(workoutContext)
    const [newUser, setNewUser] = useState({
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: ''
        })
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        await registerNewUser(newUser)
        .then(response => {
            workoutContext.setUser(response.token)
            workoutContext.setLoggedIn(true)
            props.history.push('/')
        })
    }

    console.log(workoutContext.user)

    const handleChange = (e) => {
        const value = e.target.value
        setNewUser({...newUser, [e.target.name]: value});
     };

    return (
        <>
        <Form onSubmit={ handleSubmit }>
            <div className='label'>
                <label>First name:</label>
            </div>
            <Form.Control 
                name='first_name' 
                type='text' 
                value={newUser.first_name} 
                onChange={ handleChange }  
            />
    
            <div className='label'>
                <label>Last name:</label>
            </div>
            <Form.Control 
                name='last_name' 
                value={newUser.last_name} 
                onChange={ handleChange } 
            />

            <div className='label'>
                <label>Username:</label>
            </div>
            <Form.Control 
                name='username' 
                value={newUser.username} 
                onChange={ handleChange }  
            />

            <div className='label'>
                <label>Email:</label>
            </div>
            <Form.Control 
                name='email' 
                value={newUser.email} 
                onChange={ handleChange } 
            />

            <div className='label'>
                <label>Password:</label>
            </div>
            <Form.Control 
                name='password' 
                value={newUser.password} 
                onChange={ handleChange } 
            />

            <Form.Control className='register-submit' type="Submit" value="Submit" />

        </Form>

        </>
    )
}