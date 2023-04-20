import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import BottomBanner from '../pages/Shared/RightNav/BottomBanner';
import Navigation from '../pages/Shared/Navigation/Navigation';


const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Navigation></Navigation>
            <>
                <Row className='mt-5'>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                        <BottomBanner></BottomBanner>
                    </Col>
                </Row>
            </>
            <Footer></Footer>
        </div>
    );
};

export default Main;