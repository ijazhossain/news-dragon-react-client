import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Navigation = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then((result) => {

                console.log('signout successfully')
            })
            .catch((error) => console.log(error))
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>

                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <div>
                        <FaUser></FaUser>
                        {!user ?
                            <Button onClick={() => navigate('/login')} className='ms-3' variant="dark">Login</Button>
                            :

                            <Button onClick={handleLogout} className='ms-3' variant="danger">SignOut</Button>}
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;