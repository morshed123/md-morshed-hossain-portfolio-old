import React from 'react';
import Header from '../Header/Header';
import {Outlet} from "react-router-dom";

const Layout = ({childdren}) => {
    return (
        <>
            <Header/>
            <div>{childdren}</div>
            <div className="content">
        <Outlet />
      </div>
        </>
    );
};

export default Layout;