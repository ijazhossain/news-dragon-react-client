import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const EditorialsInside = () => {
    return (
        <Row xs={1} md={2} lg={3} className='my-4'>
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
    );
};

export default EditorialsInside;