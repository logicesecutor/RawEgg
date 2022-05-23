import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
//import styles from '../styles/Home.module.css'

import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'


export default function Home() {
  return (
    <>
      <div className='MyBg'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="/" className="NameColor">Cook4Me</Navbar.Brand>
            </Nav>
            <Nav>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#deets">More deets</Nav.Link>

                <Link href="/LogIn/loginForm">
                  <Button variant="success">
                    Login
                  </Button>
                </Link>

              </Navbar.Collapse>
            </Nav>

          </Container>
        </Navbar>
      </div>
    </>
  )
}
