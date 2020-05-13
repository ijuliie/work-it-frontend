import React, { useState, useContext } from 'react'
import { userLogin } from '../../services/api-helper'
import { WorkoutContext } from '../../App'
import { Form } from 'react-bootstrap'

export default function Login(){
    const workoutContext = useContext(WorkoutContext)
    const [login, setLogin] = useState(
        {
            username: '',
            password: ''
        }
    )
    console.log(login)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("LOGIN FROM SUBMIT", login)
        await userLogin(login).then(response => {
            console.log("resposne:", response)
            if(response.status === 200){
                workoutContext.setUser(response.data)
                localStorage.setItem('user')
                console.log(response.data)
                console.log('sucess')
			} else {
				console.log('error')
			}
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setLogin({...login, [e.target.name]: value});
     };

    return(
        <Form onSubmit={ handleSubmit }>

        <input name="username" value={login.username} onChange={ handleChange } placeholder="Username" />

        <input name="password" value={login.password} onChange={ handleChange } placeholder="Password" />

        <input type="Submit" value="Submit" />
    </Form>
    )
}