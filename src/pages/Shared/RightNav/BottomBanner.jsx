import React from 'react';
import bg from '../../../assets/bg.png'
import { Button } from 'react-bootstrap';
const BottomBanner = () => {
    return (
        <div className='text-center position-relative'>
            <img src={bg} alt="" />
            <div className=' p-5 position-absolute top-0 text-white' >
                <h2>Create an Amazing Newspaper</h2>
                <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='' variant='danger'>Learn More</Button>
            </div>

        </div>
    );
};

export default BottomBanner;