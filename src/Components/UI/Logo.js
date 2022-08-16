import React from 'react';
import { Link } from 'react-router-dom';

import { gitUrl } from '../../App';

const Logo = () => {
    return (
        <div class="logo">
            <Link to={`${gitUrl}/`}><img src="static/images/logo.svg" /></Link>
        </div>
    );
};

export default Logo;