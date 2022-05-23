import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import Link from 'next/link';

export default function LoginForm() {

    const [mail, setMail] = useState(null)
    const [surname, setSurname] = useState(null)

    const submitContact = async (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const res = await fetch('/api/hello', {
          body: JSON.stringify({
            name: name,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
        const result = await res.json();
        alert(`Is this your full name: ${result.name}`);
      };


    return (
        <>
        <Container>
            <Form>
                <Form.Group className="md-3">
                    <Form.Label>
                        Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(ev)=>setMail(ev.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(ev)=>setSurname(ev.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={submitContact}>
                    Submit
                </Button>
            </Form>
            </Container>
            <Container className="text-center mt-4 mb-4">
                <Link href="/">
                    <Button>
                        <a>Return HomePage</a>
                    </Button>
                </Link>
            </Container>
        </>
    )
}