import React from 'react';
import './testimonial.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
import { Navigation, Pagination, Autoplay , A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Testimonial = () => {
    return (
        <section id='testimonials'>
            <h5>Review from client</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination, Autoplay, Navigation ]}
                Navigation
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={true}
            >
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT1} alt="" />
                    </div>
                    <h5 className='client__name'>Avatar Name</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quam dolorem beatae inventore molestiae aperiam, dolor nostrum voluptate. Ipsam eveniet sit, qui assumenda harum itaque amet nostrum aliquam incidunt quaerat?
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT2} alt="" />
                    </div>
                    <h5 className='client__name'>Avatar Name</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quam dolorem beatae inventore molestiae aperiam, dolor nostrum voluptate. Ipsam eveniet sit, qui assumenda harum itaque amet nostrum aliquam incidunt quaerat?
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT3} alt="" />
                    </div>
                    <h5 className='client__name'>Avatar Name</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quam dolorem beatae inventore molestiae aperiam, dolor nostrum voluptate. Ipsam eveniet sit, qui assumenda harum itaque amet nostrum aliquam incidunt quaerat?
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT4} alt="" />
                    </div>
                    <h5 className='client__name'>Avatar Name</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quam dolorem beatae inventore molestiae aperiam, dolor nostrum voluptate. Ipsam eveniet sit, qui assumenda harum itaque amet nostrum aliquam incidunt quaerat?
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonial