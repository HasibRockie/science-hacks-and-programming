import React from 'react';
import './Cover.css'
import coverPhoto from './web-cover.webp'

const About = () => {
    return (
        <div className="cover">
            <img width="100%" src={coverPhoto} alt="mhwp"/>
        </div>
    );
};

export default About;