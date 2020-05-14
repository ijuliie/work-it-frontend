import React, { useState, useEffect, useContext } from 'react'
import { createWorkout, userLogin } from '../../services/api-helper'
import { WorkoutContext } from '../../App'
import { Form } from 'react-bootstrap'

export default function CreateWorkout(){
    const workoutContext = useContext(WorkoutContext)
    const [newWorkout, setNewWorkout] = useState({
        day: '',
        workout: '',
        workout_routine: '' 
      })

      console.log("NEWOWRKOUT:", newWorkout)
      console.log("CREATEWORK", workoutContext.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        await createWorkout(newWorkout, workoutContext.user)
        .then(response => {
            if(response.token === 201){
                console.log("RESPONSE!!!!!!!!!!")
                workoutContext.workouts.push(newWorkout)
            }
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setNewWorkout({...newWorkout, [e.target.name]: value})
     }

    return (
        <form onSubmit={ handleSubmit }>

            <select
                name="day" 
                value={newWorkout.day} 
                onChange={ handleChange } 
                placeholder="day" >
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
            </select>

            <select
                name="workout" 
                value={newWorkout.workout} 
                onChange={ handleChange } 
                placeholder="day" >
                <option>shoulders</option>
                <option>arms</option>
                <option>back</option>
                <option>chest</option>
                <option>abs</option>
                <option>legs</option>
            </select>

            <textarea 
                name="workout_routine" 
                value={newWorkout.workout_routine} 
                onChange={ handleChange } 
                placeholder='Workout Routine'
            >
            </textarea>

            <input type="Submit" value="Submit" />
        </form>
    )
}