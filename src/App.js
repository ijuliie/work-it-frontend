import React, { useState, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Profile from './components/profile/profile'
import Exercise from './components/exercise/exercise'
import Register from './components/authentication/register'
import Login from './components/authentication/login'
import Nav from './components/nav/nav'
import './App.css'

function App() {

  const [user, setUser] = useState(localStorage.getItem('user'))
  const [newWorkout, setNewWorkout] = useState({
    day: '',
    workoutCategory: '',
    workoutRoutine: '' 
  })


  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <WorkoutContext.Provider value={{
          user,
          setUser,
          newWorkout,
          setNewWorkout,
        }}>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/profile' component={ Profile } />
            <Route path='/exercise' component={ Exercise } />
            <Route path='/register' component={ Register } />
            <Route path='/login' component={ Login }/>
        </Switch>
        </WorkoutContext.Provider>
      </header>
    </div>
  );
}

export const WorkoutContext = createContext()
export default App