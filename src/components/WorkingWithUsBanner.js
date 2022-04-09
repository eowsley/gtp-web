import React from 'react';
import WorkingWithUs from './WorkingWithUs';
import {Link} from 'react-router-dom'
import './WorkingWithUsBanner.css'

function WorkingWithUsBanner(props) {
    return (
        <div className='workingwithusbanner__div'>
            <Link to={<WorkingWithUs/>}>Working With Us</Link>
        </div>
    );
}

export default WorkingWithUsBanner;