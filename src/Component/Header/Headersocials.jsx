import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';

const Headersocials = () => {
    return (
        <div>
            <div className="header__socials">
                <a href="https://www.linkedin.com/mwlite/in/beloved-obiora-665097236" target="_blank"> <AiFillLinkedin /></a>
                <a href="https://github.com/Belgotech" target="_blank"><FaGithubSquare /></a>
                <a href="https://twitter.com/Belovedobiora1" target="_blank"><IoLogoTwitter /></a>
                <a href="https://m.me/slendid.king" target="_blank"><BsFacebook /></a>
            </div>
        </div>
    )
}

export default Headersocials
