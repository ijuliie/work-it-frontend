import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { WorkoutContext } from '../../App'
import './home.scss'
import '../../styles.scss'

export default function Home(props){
    const workoutContext = useContext(WorkoutContext)

    const handleLogout = async () => {
        workoutContext.setLoggedIn(false)
        props.history.push('/')
    }

    return (
            <Container>
        { !workoutContext.loggedIn ?
            <Card style={{ width: '13rem', height: '7.7rem' }}>
                <Card.Body>
                    <Link to='/register'>Register</Link>
                    <div><Link to='/register'><i className="fas fa-user-plus"></i></Link></div>
                </Card.Body>
            </Card> :

            <Card style={{ width: '13rem', height: '7.7rem' }}>
            <Card.Body>
                <div onClick={handleLogout}><Link to='#'>Log Out</Link></div>
                <div><Link to='#'><i class="fas fa-sign-out-alt"></i></Link></div>
            </Card.Body>
            </Card> 
        }

                <Card style={{ width: '13rem', height: '7.7rem' }}>
                    <Card.Body>
                        <Link to='/profile'>Profile</Link>
                        <div><Link to='/profile'><i class="fas fa-user-circle"></i></Link></div>
                    </Card.Body>
                    </Card>

                <Card style={{ width: '13rem', height: '7.7rem' }}>
                    <Card.Body>
                        <Link to='/createworkout'>Create Workout</Link>
                        <div><Link to='/createworkout'><i className="fas fa-dumbbell"></i></Link></div>
                    </Card.Body>
                    </Card>

                <Card style={{ width: '13rem', height: '7.7rem' }}>
                    <Card.Body>
                        <Link to='/exercise'>Excercises</Link>
                        <div><Link to='/exercise'><i class="fas fa-running"></i></Link></div>
                    </Card.Body>
                    </Card>
            </Container>
    )
}