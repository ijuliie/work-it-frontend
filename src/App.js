import React, { useState, useEffect, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Profile from './components/profile/profile'
import CreateWorkout from './components/createworkout/createworkout'
import Register from './components/authentication/register'
import Login from './components/authentication/login'
import Nav from './components/nav/nav'
import NoAccess from './components/authentication/noaccess'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [workout, setWorkout] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <WorkoutContext.Provider value={{
          user,
          setUser,
          workout,
          setWorkout,
          loggedIn,
          setLoggedIn
        }}>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/profile' component={ Profile } />
            <Route path='/createworkout' component={ loggedIn ? CreateWorkout : NoAccess } />
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