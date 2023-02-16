import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <a href="#header" className="footer-logo">
                MAROUEN
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#header">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <IoLogoTwitter />
                </a>
            </div>

            <div className="footer-copyright">
                <small>&copy; MAROUEN MAATOUG. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
