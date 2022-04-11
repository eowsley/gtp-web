import React from 'react';
import {Link} from 'react-router-dom'
import WorkingWithUs from './WorkingWithUs';
import './WorkingWithUsBanner.css'

function WorkingWithUsBanner(props) {
    return (
        <div className='workingwithusbanner__div'>
            <Link to='/aboutus'><p>Working With Us</p></Link>
        </div>
    );
}

export default WorkingWithUsBanner;