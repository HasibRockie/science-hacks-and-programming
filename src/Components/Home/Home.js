import React from 'react';
import './Home.css'
import Goals from './../Goals/Goals';
import Cover from '../Cover/Cover';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div className="home">
            <Cover></Cover>
            <Goals></Goals>
            <ServicesHome></ServicesHome>
        </div>
    );
};

export default Home;