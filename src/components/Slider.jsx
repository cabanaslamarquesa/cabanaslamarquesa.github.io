import React, {useEffect} from 'react';
import '../style/Slider.scss';
import img1 from '../assets/slider/1.jpeg';
import img2 from '../assets/slider/2.jpeg';
import img3 from '../assets/slider/3.jpeg';
import img4 from '../assets/slider/4.jpg';

const Slider = () => {

    useEffect(() => {
        var swiperHome = new Swiper(".mySwiper-home", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    },[])

    return (
        <div className='swiper mySwiper-home'>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={img1} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={img2} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={img3} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className="swiper-button-next" style={{color:"#ffffff"}}></div>
            <div className="swiper-button-prev" style={{color:"#ffffff"}}></div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default Slider;