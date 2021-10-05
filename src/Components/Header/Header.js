import logo from './2.png'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand> <img height="45px" src={logo} alt="logo" /> <Link className="head-title" to='/'> Science Hacks & Programming </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="head-link" to='/home'>Home</Link>
                    <Link className="head-link" to='/services'>Services</Link>
                    <Link className="head-link" to='/about'>About</Link>
                    <Link className="head-link" to='/socialmedia'>Social Media</Link>   
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;