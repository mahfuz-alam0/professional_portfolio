import React from 'react';
import { Link } from 'react-scroll';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import my_img from '../../img/my_image.png';
import facebook from '../../img/Facebook.png';

const Intro = () => {

    const blank = '_blank'

    return (
        <div className='container intro_container'>
            <div className="Intro" id="Intro">
                {/* left name side */}
                <div className="i-left">
                    <div className="i-name">
                        {/* yahan change hy darkmode ka */}
                        <span>Hy! I Am</span>
                        <span>Mahfuz Alam</span>
                        <span>
                            Full-Stack Developer with high level of skills in Front-End & Back-End Development, producting the Quality work
                        </span>
                    </div>
                    <Link to="contact" smooth={true} spy={true}>
                        <button className="btn">Hire me</button>
                    </Link>
                    <div
                        className="blur"
                        style={{
                            background: "rgb(219 244 249)",
                            top: "0rem",
                            width: "36rem",
                            height: "22rem",
                            left: "-12rem",
                        }}
                    ></div>

                    {/* social icons */}
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

                <div className="i-right">
                    <div className="my_img">
                        <img className='image' src={my_img} alt='' />
                    </div>
                    <div className="blur" style={{ background: "rgb(153 229 193)" }}></div>
                    <div
                        className="blur"
                        style={{
                            background: "rgb(178 234 245)",
                            top: "15rem",
                            width: "28rem",
                            height: "15rem",
                            left: "-12rem",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};
export default Intro;