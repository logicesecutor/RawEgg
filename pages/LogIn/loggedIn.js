import { Button, Container } from "react-bootstrap";
import Link from 'next/link';


export default function Login() {
    return (
        <>
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