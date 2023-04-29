import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { useState } from 'react';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    // console.log(createUser);
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(name, email, password, confirmPassword);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                sendEmailVerification(user)
                updateProfile(user, {
                    displayName: name,
                    photoURL: 'https://plus.unsplash.com/premium_photo-1677234147673-fad786a3e2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                }).then(() => {
                    alert('user updated')
                }).catch(error => {
                    console.log(error)
                })
                navigate('/')
            }).catch(error => {
                console.log(error.message);
            })
    }
    const handleCheck = (e) => {
        setAccepted(e.target.checked)
    }
    return (
        <>

            <Container>
                <h1 className='text-center my-5 text-primary'>Please Register!!</h1>
                <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleCheck} type="checkbox" label="Accept Terms & Conditions" />
                        <Link to="/termsConditions">Show Our Tearm & Conditions</Link>
                    </Form.Group>
                    <p className='text-primary'>Already have an account? <Link className="text-danger text-decoration-none" to="/login"><span >Login</span></Link></p>
                    <Button disabled={!accepted} variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Register;