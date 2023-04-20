import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <Container>
                <h1 className='text-center my-5 text-success'>Please Login!!</h1>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p className='text-primary'>New to our site? <Link className="text-danger text-decoration-none"
                        to="/register"><span
                        >Register</span></Link></p>
                    <Button variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Login;