import React from 'react'
import { Navbar, Nav,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <div>
      <Navbar expand='md' variant='dark' className='p-3' style={{backgroundColor: '#20292f'}}>
        <Navbar.Brand href='/'>React Photo Album</Navbar.Brand>
        {/*Now for the hamburger menu */}
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            {/*Page links will go below */}
            <Nav>
                <Link to='/' className='nav-link'>Home</Link>                
            </Nav>
            
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
