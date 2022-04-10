import React from 'react';
import AboutUs from './AboutUs';
import WorkingWithUsBanner from './WorkingWithUsBanner';
import './Home.css'

function Home(props) {
    return (
        <div>
            <AboutUs/>
            <WorkingWithUsBanner/>
        </div>
    );
}

export default Home;