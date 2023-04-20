import React from 'react';
import Navigation from '../pages/Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
};

export default LoginLayOut;