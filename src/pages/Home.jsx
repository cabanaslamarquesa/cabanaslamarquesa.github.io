import React, {useEffect} from 'react';
import AboutUs from '../components/AboutUs';
import Chalet from '../components/Chalet';
import Services from '../components/Services';
import '../style/Home.scss';

import chalet from '../assets/img/4.jpg'
import Activities from '../components/Activities';
import Location from '../components/Location';
import Slider from '../components/Slider';
const img = {
   "chalet":chalet
}

const Home = () => {

    useEffect(() => {

        window.scrollTo(0,0)

        const object1 = document.getElementById('about-us')
        const object2 = document.getElementById('chalet')
        const object3 = document.getElementById('service')
    
        const loadObject = (intos, observer) => {
        intos.forEach((into) => {
            if(into.isIntersecting){
            into.target.classList.add('visible')
            }
        });
        }
    
        const observer = new IntersectionObserver(loadObject, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5
        })
    
        observer.observe(object1)
        observer.observe(object2)
        observer.observe(object3)
    },[])

    return (
        <div className="Home">
            <section className='slider'>
                <Slider />
            </section>
            <section className='main-containers'>
                <Services />
            </section>
            <section className='main-containers main-containers--gray'>
                <AboutUs />
            </section>
            <section className='main-containers'>
                <Chalet 
                    title="Cabana Mas Popular"
                    img={img['chalet']} 
                    subtitle="Cabana para Parejas"
                    people='10'
                    price='$60.000'
                    id='couple'
                />
            </section>
            <section className='main-containers main-containers--activities'>
                <Activities />
            </section>
            <section className='main-containers main-containers--gray'>
                <Location />
            </section>
        </div>
    );
};

export default Home;