import React, { useState, useContext } from 'react'
import { registerNewUser } from '../../services/api-helper'
import { WorkoutContext } from '../../App'
import { Form } from 'react-bootstrap'

export default function Register() {
    const workoutContext = useContext(WorkoutContext)
    console.log(workoutContext)
    const [newUser, setNewUser] = useState(
        {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: ''
        }
    )

    console.log('newuser:', newUser)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await registerNewUser(newUser)
        .then(response => {
            console.log("WHAT AM I???????:",response)
            if(response.token){
                console.log("reponse:", response.status)
                console.log("success")
                workoutContext.setUser(response)
                localStorage.setItem('user', JSON.stringify((response))) //i dont work
            }  else {
                console.log('failed')
            }
        })
    }
    console.log("USER FROM LOCAL STORAGE",localStorage.getItem("user").username)

    const handleChange = (e) => {
        const value = e.target.value
        setNewUser({...newUser, [e.target.name]: value});
     };

    return (
        <>
        <Form onSubmit={ handleSubmit }>

            <Form.Control name='first_name' type='text' value={newUser.first_name} onChange={ handleChange }  placeholder="First name" />
    
            <Form.Control name='last_name' value={newUser.last_name} onChange={ handleChange } placeholder="Last name" />

            <Form.Control name='username' value={newUser.username} onChange={ handleChange } placeholder="Username" />

            <Form.Control name='email' value={newUser.email} onChange={ handleChange } placeholder="Email" />

            <Form.Control name='password' value={newUser.password} onChange={ handleChange } placeholder="Password" />

            <Form.Control type="Submit" value="Submit" />
        </Form>
        </>
    )
}