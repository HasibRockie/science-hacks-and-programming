import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import img1 from './01.png'
import img2 from './02.png'
import img3 from './03.png'
import img4 from './04.png'
import './Slides.css'

const Slides = () => {
    return (
        <div>
            <br /><br /><br />
            <hr />
            <Carousel fade  variant="dark">
                <Carousel.Item interval={500}>
                    <img
                    className="d-block carousel-img"
                    src={img3}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block h-50 carousel-img"
                    src={img1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block h-50 carousel-img"
                    src={img2}
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block h-50 carousel-img"
                    src={img4}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Slides;