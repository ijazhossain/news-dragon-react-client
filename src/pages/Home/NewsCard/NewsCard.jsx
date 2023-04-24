import React from 'react';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    // console.log(news)
    const { _id, image_url, author, title, details } = news;
    return (
        <div style={{ border: '1px solid #E7E7E7', borderRadius: '5px' }} className='mb-4 p-3'>
            <div style={{ backgroundColor: '#f3f3f3', borderRadius: '5px 5px 0px 0px' }} className='d-flex align-items-center p-3'>
                <img style={{ width: '60px', height: '60px' }} className=' rounded-pill' src={author.img} alt="" />
                <div className='ms-2'>
                    <p className='mb-0'>{author.name}</p>
                    <p className='mb-0'>{author.published_date}</p>
                </div>
                <div className='ms-auto'>
                    <FaBookmark />
                    <FaShareAlt />

                </div>
            </div>
            <h3 className='my-3'>{title}</h3>
            <img className='img-fluid' src={image_url} alt="" />
            <p className='my-4'>{details}</p>
            <Link to={`/news/${_id}`}>Read more</Link>
        </div>
    );
};

export default NewsCard;