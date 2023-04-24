import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useRef } from 'react';
const Login = () => {
    const { signInUser, loading, resetPassword } = useContext(AuthContext)
    console.log(signInUser);
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()
    const from = location?.state?.from?.pathname || '/';
    if (loading) {
        return <h1>Loading...</h1>
    }
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error.message);
            })
    }
    const forgetPassword = (event) => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please enter your Email')
            return;
        }
        console.log(email);
        resetPassword(email)
            .then(() => {
                alert('password reset email sent')
            }).catch(error => {
                console.log(error.message);
            })
    }
    return (
        <>
            <Container>
                <h1 className='text-center my-5 text-success'>Please Login!!</h1>
                <Form onSubmit={handleSignIn} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" ref={emailRef} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
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
                    <Button onClick={forgetPassword} variant="link">Reset Password</Button>
                </Form>
            </Container>
        </>
    );
};

export default Login;