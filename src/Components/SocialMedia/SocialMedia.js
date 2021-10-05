import React from 'react';
import { Link } from 'react-router-dom';
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div>
            <div className="facebook">
                <h2>Join our <span style={{color:'coral'}}>facebook page</span></h2>
                <div className="fb-page" data-href="https://www.facebook.com/mathHacksWithProgramming" data-tabs="timeline" data-width="1280px" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/mathHacksWithProgramming" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/mathHacksWithProgramming">Math Hacks With Programming</a></blockquote></div>
            </div>
            <br /><br /><hr /><br /><br />
            <div className="Youtube">
                <h2>Subscribe<span style={{color:'coral'}}> Youtube Channel</span></h2>
                
                <div className="video-container">
                    <div className="video">
                    <iframe width="100%" height="390px" src="https://www.youtube.com/embed/x0r5Y6vFR2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="video">
                    <iframe width="100%" height="390px" src="https://www.youtube.com/embed/6Y0B9LWkXCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;