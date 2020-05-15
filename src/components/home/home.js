import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.scss'
import '../../styles.scss'

export default function Home(){
    return (
            <Container>
                <Card style={{ width: '14rem', height: '9rem' }}>
                    <Card.Body>
                        <Link to='/register'>Register</Link>
                        <div><Link to='/register'><i className="fas fa-user-plus"></i></Link></div>
                    </Card.Body>
                    </Card>

                <Card style={{ width: '14rem', height: '9rem' }}>
                    <Card.Body>
                        <Link to='/profile'>Profile</Link>
                    </Card.Body>
                    </Card>

                <Card style={{ width: '14rem', height: '9rem' }}>
                    <Card.Body>
                        <Link to='/createworkout'>Create Workout</Link>
                        <div><Link to='/createworkout'><i className="fas fa-dumbbell"></i></Link></div>
                    </Card.Body>
                    </Card>

                <Card style={{ width: '14rem', height: '9rem' }}>
                    <Card.Body>
                        <Link to='/exercise'>Excercise</Link>
                        <div><Link to='/exercise'><i className="fas fa-bicycle"></i></Link></div>
                    </Card.Body>
                    </Card>
            </Container>
    )
}