import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <>
        <Navbar />
        <div className="container contact">
            <div className="c_div_1">
                <img className="c_img1" src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg" alt="Contact Image" style={{maxWidth: '100%', display: 'block', margin: '0 auto'}} />
            </div>
            <div className="c_div_2">
                <h1 className="bg-dark p-2 text-white text-center c_h1">CONTACT US</h1>
                <p className="text-justify mt-2 c_p">
                Hit a Glitch? We've Got the Fix. We're Here to Help You Find the Way
                </p>
                <p className="mt-3">
                    <BiMailSend /> : www.help@coderdoder.com
                </p>
                <p className="mt-3">
                    <BiPhoneCall /> : 7589624015
                </p>
                <p className="mt-3">
                    <BiSupport /> : 1800-0088-0707 (toll free)
                </p>
            </div>           
        </div>
        <Footer />
    </>
  )
}

export default Contact

 