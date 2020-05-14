import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.scss'
import { CardBody } from 'reactstrap'

export default function Home(){
    return (
        <>
            <Container>
                <Card style={{ width: '12rem', height: '10rem' }}>
                    <Card.Body>
                        <Link to='/register'>Register</Link>
                        <Link to='/register'><i className="fas fa-user-plus"></i></Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '12rem', height: '10rem' }}>
                    <Card.Body>
                        <Link to='/profile'>Profile</Link>
                    </Card.Body>    
                </Card>

                <Card style={{ width: '12rem', height: '10rem' }}>
                    <Card.Body>
                        <Link to='/exercise'>Excercise</Link>
                        <Link to='/exercise'><i className="fas fa-bicycle"></i></Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '12rem', height: '10rem' }}>
                    <Card.Body>
                        <Link to='/createworkout'>Create Workout</Link>
                        <Link to='/createworkout'><i class="fas fa-dumbbell"></i></Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}