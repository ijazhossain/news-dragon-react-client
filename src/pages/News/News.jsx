import React from 'react';
import EditorialsInside from './EditorialsInside';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsArrowLeft } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const News = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <h1>Loading...</h1>
    }
    const news = useLoaderData()
    // const { id } = useParams()
    const navigate = useNavigate()
    console.log(news);
    const { image_url, title, details, category_id } = news;
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="danger" onClick={() => navigate(`/category/${category_id}`)} ><BsArrowLeft />All the news in this category</Button>
                </Card.Body>
            </Card>
            <EditorialsInside></EditorialsInside>
        </div>
    );
};

export default News;