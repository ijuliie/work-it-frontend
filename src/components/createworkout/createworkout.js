import React, { useState, useEffect, useContext } from 'react'
import { WorkoutContext } from '../../App'
import { createWorkout, deleteWorkout, getWorkouts } from '../../services/api-helper'

export default function CreateWorkout(){
    const workoutContext = useContext(WorkoutContext)
    const [newWorkout, setNewWorkout] = useState({
        day: '',
        workout: '',
        workout_routine: '' 
      })

      useEffect(() => {
        const callAPI = async () => {
            const res = await getWorkouts(workoutContext.user)
            workoutContext.setWorkout(res.data)
        }
        callAPI()
      }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await createWorkout(newWorkout, workoutContext.user)
        .then(response => {
            if(response.token === 201){
                workoutContext.workout.push(res)
                workoutContext.setWorkout(res) // works but needs to render on page after submit
            }
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setNewWorkout({...newWorkout, [e.target.name]: value})
     }

     // i don't work correctly
     const handleDelete = async (response, index) => {
        await deleteWorkout(workoutContext.user)
        workoutContext.workout.splice(index, 1)
        // workoutContext.setNewWorkout()
        // workoutContext.setWorkout(workoutContext.workout)
    }


    return (
        <>
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

            <div>
                {
                workoutContext.workout ? 
                    workoutContext.workout.map((workout, i) => { 
                    return ( 
                        <div key={i}>
                            <h3>{workout.day}</h3>
                            <p>{workout.workout}</p>
                            <p>{workout.workout_routine}</p>
                            <button onClick={handleDelete}>delete</button>
                        </div>
                        )
                    }) : ''
                }
            </div>
        </>
    )
}