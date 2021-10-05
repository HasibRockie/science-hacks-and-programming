import React from 'react';
import notfound from './404.jpeg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" /> <br /> <br /><br /><br /><br />
            <Link to="/home"> <button className="btn btn-primary">Go to Home</button> </Link>
        </div>
    );
};

export default NotFound;