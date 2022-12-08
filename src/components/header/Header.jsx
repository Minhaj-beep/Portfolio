import React, { Component } from 'react';
import './header.css'
import CTA from './CTA';
import HeaderSoical from './HeaderSocial';
import ME from '../../assets/me.png'

const Header = () => {
    const frequency = (x, y, z) => {
        if (x != null && y != null && z != null) {
            console.log('Keep an empty input field for which you want to wind the value')
        } else if (x == null && y == null && z == null) {
            console.log('Please fill at least two input')
        } else if (x == null && y == null || y == null && z == null || x == null && z == null) {
            console.log('Please fill at least two input')
        } else {
            if (x == null) {
                // console.log('find x')
                console.log('Value of wevelength is = ' + (y/z))
            } else if (y == null) {
                // console.log('find y')
                console.log('Value of Velocity is = ' + (x*z))
            } else {
                // console.log('find z')
                console.log('Value of frequency is = ' + (y/x))
            }
        }
    }

    frequency(6, 20, 4)

    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Minhaj Ahmed</h1>
                <h5 className="text-light">Fullstack App Developer</h5>
                <CTA />
                <HeaderSoical />

                <div className="me">
                    <img src={ME} alt="my image" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header