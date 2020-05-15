import React from 'react'
import { Navbar } from 'react-bootstrap'
import './header.scss'
import '../../styles.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar>
            <Link to='/'><i style={{color: '#ffffff'}} className="fas fa-angle-left"></i></Link>
            <h3>WORK IT</h3>
        </Navbar>
 )
}