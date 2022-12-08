import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSoical = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/minhaj-ahmed-7667821a0" target={"_blank"}><BsLinkedin/></a>
            <a href="https://github.com/Minhaj-beep" target={"_blank"}><FaGithub/></a>
            <a href="https://dribbble.com/Minhaj_Ahmed_1997" target={"_blank"}><FiDribbble/></a>
        </div>
    )
}

export default HeaderSoical