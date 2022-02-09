// import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from "react-router-dom";


const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    // const [size, setSize] =useState({
    //     width: undefined,
    //     hight: undefined,
    // });
    const navigate = useNavigate();
    const headerClickHandler = e => {
        e.preventDefault()
        // navigate(-1);
        navigate("/")
      };
    
    // useEffect(() => {
    //     const handleResize = () => {
    //         setSize()({
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //         });
    //     };
    //     window.addEventListener("resize", handleResize);
    // }, []);

    // useEffect(() => {
    //     if(size.width > 768 && menuOpen){
    //         setMenuOpen(false);
    //     }
    // }, [size.width, menuOpen]);

    // const menuToggleHandler = () => {
    //     setMenuOpen((p) =>!p);
    // };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid mx-3">
                <Link to="/" className="navbar-brand" >Morshed</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    {/* 1st one */}
                    <span onClick={headerClickHandler}></span>
                    {/* 2nd one or */}
                    {/* <button onClick={headerClickHandler}></button> */}
                    {/* 3rd one or */}
                    {/* <a href="#" onClick={headerClickHandler}></a> */}

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <Link to='home' className="nav-link active" aria-current="page" onClick={menuToggleHandler}>Home</Link> */}
                            <Link to='home' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link to='about' className="nav-link" onClick={menuToggleHandler}>About</Link> */}
                            <Link to='about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='education' className="nav-link" >Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='skills' className="nav-link" >Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='projects' className="nav-link" >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='exprience' className="nav-link" >Exprience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='contact' className="nav-link" >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='resume' className="nav-link" >Resume</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default Header;