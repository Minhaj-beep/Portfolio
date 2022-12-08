import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                        <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide UX based on your requirement</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide UI to make your idea visualize</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide wireframe and prototype for your satisfaction</p>
                        </li>
                        </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Mobile App Development</h3>
                    </div>
                        <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide buttery smooth experience</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide android and ios apps</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide apps with third party API integration</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide native mobile apps based on requirement</p>
                        </li>
                        </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                        <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide amazing web app based on your requirement</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide full stack web application</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide maintenance support to your current web application</p>
                        </li>
                        </ul>
                </article>
            </div>
        </section>
    )
}

export default Services