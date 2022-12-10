import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className='container navbar'>
                <div>
                    <h2 className='Title'>Mahfuz Alam</h2>
                </div>
                <div>
                    <ul className='navlist'>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="portfoio" spy={true} smooth={true}>
                                Portfoio
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Contect
                            </Link>
                        </li>
                        <button className='btn hover'>Download CV</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;