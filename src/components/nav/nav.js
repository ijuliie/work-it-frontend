import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
export default function Nav() {
    return (
        <>
        <Nav>
            <Navbar>
                <Container>
                    <Link to='login'>Login</Link>
                    <Link to='profile'>Profile</Link>
                    <Link to='createworkout'>Create Workout</Link>
                    <Link to='register'>Register</Link>
                </Container>
            </Navbar>
        </Nav>
        </>
    )
}