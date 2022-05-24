import Head from 'next/head'
import Image from 'next/image'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';
//import styles from '../styles/Home.module.css'

import { Navbar, Container, Nav, NavDropdown, Button, ListGroup } from 'react-bootstrap'


export default function Home({ libraries }) {
  console.log('libraries', libraries);
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
        {/* <ListGroup>
          {
            libraries.map(books => {
              return <ListGroup.Item>
                {books.autor}
              </ListGroup.Item>
            })
          }
        </ListGroup> */}
      </div>
    </>
  )
}


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetBooksByLibrary {

          libraries {

            books {

              author {

                name

              }

            }

          }

          }
    `
  });

  return {
    props: {
      libraries: data.libraries
    }
  }
}
