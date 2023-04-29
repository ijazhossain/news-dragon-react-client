import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://news-dragon-server-2fyzzn35w-ijazhossain.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <>
            {
                categories.map(category => <Link className='text-decoration-none text-black ps-5 d-block' to={`/category/${category.id}`}
                    key={category.id}><p style={{ color: '#9F9F9F' }} className='fw-semibold'

                    >{category.name}</p></Link>)
            }
            <>
                <Row xs={1} className='my-4 gy-4'>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        </>
    );
};

export default LeftNav;