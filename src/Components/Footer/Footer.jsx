import React from 'react';
import wave from '../../img/wave.png';
import './Footer.css';
import Github from '../../img/Gothub-white.png';
import LinkedIn from '../../img/linkedIn_PNG38.png';
import facebook from '../../img/Facebook-White.png'

const Footer = () => {
    const blank = '_blank';
    return (
        <div className="footer">
            <div style={{ width: "100%" }}>
                <img src={wave} alt="" style={{ width: "100%" }} />
            </div>
            <div className="f-content">
                <span>hasibul112002@gmail.com</span>
                <div className="f-icons">
                    <div className="social_icons">
                        <a href="https://github.com/mahfuz-alam0" target={blank}>
                            <img src={Github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/hasibul-mahfuz/" target={blank}>
                            <img src={LinkedIn} alt="" />
                        </a>
                        <a href="https://www.facebook.com/hasibul.mahfuz" target={blank}>
                            <img src={facebook} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;