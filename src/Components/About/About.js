import React from 'react';
import imageLogo from './3.png'
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="part">
                <h2 style={{color:"coral"}}>Science Hacks & Programming</h2>
                <img height="300px" src={imageLogo} alt="" />

                <br /><br /><br />
                <p>
                    A dedicated online platform that is ready for satisfying the hunger of enthusiastic students about science and programming. Any passionate student can gain his/her all variety of sceince knowledge with full effort.
                </p>
                <p>
                    student can have enriched their knowledge in physics, chemistry, math, Astronomy, Code & Cipher, Mysterious things as well as all variety of programming and coding, including: c, c++, python, javascript, matlab, ruby, php and so on.
                </p>
            </div>
                <br /><br /><br />
            <div className="part">
                <h3 style={{color:"coral"}}>President's Speech</h3><br />
                <p>
                    I'm Md Hasibul Islam, a student of mechanical engineering , at Bangladesh University of Engineering and Technology. Science hacks and Programming is a great platform for all the students. they will find their own topic according to their interest. It will make their journey easier to gain new skills and build a propsperous nation in future. Thanks!
                </p>
            </div>
        </div>
    );
};

export default About;