import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-dark text-center py-5 mt-5'>
            <div className="text-white ">
                <h1 className="p-3">Pro Edu</h1>
                <p>Office 41, Zawaya Buildin, Ghala Muscat, </p>
                <p>Sultanate of Oman </p>
                <p>Privacy Ploicy | Terms of uset, </p>
            </div>
            <div className='text-white fs-2 '>
                <FaGithub className='me-5'></FaGithub>
                <FaFacebook className='me-5'></FaFacebook>
                <FaTwitter></FaTwitter>
            </div>
        </div>
    );
};

export default Footer;