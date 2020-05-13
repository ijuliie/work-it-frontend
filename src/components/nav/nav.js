import React from 'react'
import { Navbar, Container, Navlink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
export default function Nav() {
    return (
        <Navbar>
            <Container>
                <Link to='login'>Login</Link>
                <Link to='profile'>Profile</Link>
                <Link to='exercise'>Exercise</Link>
                <Link to='register'>Register</Link>
            </Container>
        </Navbar>
    )
}