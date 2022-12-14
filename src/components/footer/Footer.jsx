import React from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Minhaj</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/profile.php?id=100088715042318"><FaFacebookF/></a>
                <a href="https://instagram.com/min_way__?igshid=ZDdkNTZiNTM="><FiInstagram/></a>
                <a href="https://twitter.com/MinhajA01235508/"><IoLogoTwitter/></a>
            </div>
            <div className="footer_-copyright">
                <small>&copy; Minhaj's Portfolio. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer