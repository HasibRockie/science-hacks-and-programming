import React from 'react';
import './Home.css'
import Goals from './../Goals/Goals';
import Cover from '../Cover/Cover';
import ServicesHome from '../ServicesHome/ServicesHome';
import Slides from '../Slides/Slides';
import Illustration from '../Illustration/Illustration';

const Home = () => {
    return (
        <div className="home">
            <Cover></Cover>
            <Goals></Goals>
            <ServicesHome></ServicesHome>
            <Illustration></Illustration>
            <Slides></Slides>
        </div>
    );
};

export default Home;