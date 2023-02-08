import React from 'react';
import '../style/AboutUs.scss';
import img from '../assets/img/2.jpg';

const AboutUs = () => {

    return (
        <div className="about-us" id="about-us">
            <h2 className='main__title about-us__title--mobile'>Acerca de Nosotros</h2>
            <img src={img} alt="" />
            <article>
                <h2 className='main__title about-us__title--desktop'></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iste voluptates eius quam neque expedita! Non perspiciatis saepe dolorem! Hic, exercitationem porro. Voluptatem expedita dolores assumenda, et ipsam autem corporis.</p>
            </article>
            <a>Conoce Mas</a>
        </div>
    );
};

export default AboutUs;