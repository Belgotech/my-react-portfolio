import React from 'react'
import './Footer.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id='Footer' className='footer'>
            <h2>BELOVED OBIORA</h2>
            <ul>
                <li><a href="#Home"> Home</a></li>
                <li><a href="#About"> About</a></li>
                <li><a href="#Experience"> Experience</a></li>
                <li><a href="#Service"> Service</a></li>
                <li><a href="#Portfolio"> Portfolio</a></li>
                <li><a href="#Textimonial"> Testimonials</a></li>
                <li><a href="#"> Contact</a></li>

            </ul>
            <a href="https://www.linkedin.com/mwlite/in/beloved-obiora-665097236" target="_blank"> <AiFillLinkedin /></a>
            <a href="https://github.com/Belgotech" target="_blank"><FaGithubSquare /></a>
            <a href="https://twitter.com/Beloved99109954" ><IoLogoTwitter /></a>
            <a href="https://m.me/slendid.king" ><BsFacebook /></a>
            <p>BELOVEDOBIORA.All right reserved</p>
        </footer>
    )
}

export default Footer
