import React from 'react';
import {Link} from 'react-router-dom'
import './AboutUs.css'


function AboutUs(props) {
    return (
			<div className='aboutus__div'>
                <div className='aboutus__overlay'>
				<h3 className='aboutus__h3'>
					Full-Stack Product Development and Staff Augmentation Services
				</h3>
				<p className='aboutus__p'>
					We specialize in product specification, UI/UX design, backend
					development, cloud infrastructure setup, web/mobile frontend
					development, agile project process setup, and turn-key analytics
					implementations.
				</p>
                <Link to='/contactus'><button className='aboutus__btn'>Contact Us Today!</button></Link>
                </div>
			</div>
		);
}

export default AboutUs;