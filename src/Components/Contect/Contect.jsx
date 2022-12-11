import React from 'react';
import './Contect.css';

const Contect = () => {
    return (
        <div className=''>
            <div className="contact-form" id="contact">
                {/* left side copy and paste from work section */}
                <div className="w-left">
                    <div className="awesome">
                        {/* darkMode */}
                        <span>Get in Touch</span>
                        <span>Contact me</span>
                        <div
                            className="blur s-blur3"
                            style={{ background: "#ABF1FF94" }}
                        ></div>
                    </div>
                </div>
                {/* right side form */}
                <div className="c-right">
                    {/* <form ref={form} onSubmit={sendEmail}> */}
                    <form>
                        <input type="text" name="user_name" className="user" placeholder="Name" />
                        <input type="email" name="user_email" className="user" placeholder="Email" />
                        <textarea name="message" className="user" placeholder="Message" />
                        <input type="submit" value="Send" className="btn" />
                        {/* <span>{done && "Thanks for Contacting me"}</span> */}
                        <div
                            className="blur c-blur1"
                            style={{ background: "rgba(70 182 61 / 35%)" }}
                        ></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contect;