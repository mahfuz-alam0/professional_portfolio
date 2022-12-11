import React from 'react';

import './Portfolio.css';
import doctor from '../../img/Doctors-portal.png';
import genius from '../../img/genius.png';
import capturra from '../../img/capturra.png';
import swap from '../../img/swap.png';


const Portfolio = () => {

    return (
        <div className='container'>
            <div className="portfolio" id="portfolio">
                {/* heading */}
                <span>Recent Projects</span>
                <span>Portfolio</span>
                <p>Here are a few design projects I've worked on recently.</p>
                <div>
                    <div className="portfolio-card">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="portfolio-card">
                        <img src={genius} alt="" />
                    </div>
                    <div className="portfolio-card">
                        <img src={capturra} alt="" />
                    </div>
                    <div className="portfolio-card">
                        <img src={swap} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;