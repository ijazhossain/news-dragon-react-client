import React from 'react';
import TopHeader from '../TopHeader/TopHeader';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div className='text-center mt-5 mb-4'>
            <TopHeader></TopHeader>
            <p className='mt-2'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            <div style={{ backgroundColor: '#F3F3F3' }} className='d-flex p-3 '>
                <Button className='rounded-0' variant="danger">Latest</Button>
                <Marquee className='fw-bold text-danger' speed={50}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;