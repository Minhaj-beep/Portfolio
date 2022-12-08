import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ui.png'
import IMG2 from '../../assets/bt.png'
import IMG3 from '../../assets/cm.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is an for an mobile app</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://www.figma.com/file/htZDhMxXrKtgz2FNCAtSQx/Bloom-Telly?node-id=302%3A2" className='btn' >Figma</a>
                        <a href="https://play.google.com/store/apps/details?id=com.bloomtelly.bt" className='btn btn-primary' target={'_blank'} >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>This is an app on Play store</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://play.google.com/store/apps/details?id=com.bloomtelly.bt" className='btn' >Play store</a>
                        <a href="https://play.google.com/store/apps/details?id=com.bloomtelly.bt" className='btn btn-primary' target={'_blank'} >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a demo CMS app</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Minhaj-beep" className='btn' >Github</a>
                        <a href="https://github.com/Minhaj-beep/Thoughtctrl.git" className='btn btn-primary' target={'_blank'} >Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio