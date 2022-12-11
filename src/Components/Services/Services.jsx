import React from 'react';
import { motion } from "framer-motion";
import Card from '../Card/Card';
import './Services.css';
import front_end from '../../img/Front-end.jpeg';
import back_end from '../../img/backend.png';
import MERN from '../../img/MERN.png'

const Services = () => {

    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className='container services_section'>
            <div className="services" id="services">
                {/* left side */}
                <div className="awesome">
                    {/* dark mode */}
                    <span>My Awesome</span>
                    <span>services</span>
                    <span>
                        You Can Hire Me for These Services. I will Help you to make your Project
                        <br />
                        ispum is simpley dummy text of printing
                    </span>
                    <a href='resume'>
                        <button className="btn s-button">Download CV</button>
                    </a>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
                {/* right */}
                <div className="cards">
                    {/* first card */}
                    <motion.div
                        initial={{ left: "22rem" }}
                        whileInView={{ left: "16rem" }}
                        transition={transition}
                    >
                        <Card
                            img={front_end}
                            heading={"Front-End Development"}
                            detail={"HTML, CSS, Bootstrap, Tailwind, javascript, React.js "}
                        />
                    </motion.div>
                    {/* second card */}
                    <motion.div
                        initial={{ left: "-3rem", top: "12rem" }}
                        whileInView={{ left: "4rem" }}
                        transition={transition}
                    >
                        <Card
                            img={back_end}
                            heading={"Back-End Development"}
                            detail={"Node.js, Express.Js, REST API, MongoDB, JWT, JSON"}
                        />
                    </motion.div>
                    {/* 3rd */}
                    <motion.div
                        initial={{ top: "19rem", left: "25rem" }}
                        whileInView={{ left: "18rem" }}
                        transition={transition}
                    >
                        <Card
                            img={MERN}
                            heading={"MERN Stack Development"}
                            detail={
                                "MongoDB, Express.js, React.js, Node.js, javascript"
                            }
                            color="rgba(252, 166, 31, 0.45)"
                        />
                    </motion.div>
                    <div
                        className="blur s-blur2"
                        style={{ background: "#bbd0ff" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Services;