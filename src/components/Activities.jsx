import React, {useEffect} from 'react';
import '../style/Activities.scss';

import img1 from '../assets/img/8.jpg';
import img2 from '../assets/img/7.jpg';
import img3 from '../assets/img/6.jpg';
import img4 from '../assets/img/5.jpg';
import img5 from '../assets/img/4.jpg';

const Activities = () => {

    useEffect(() => {
        let isDown = false;
        let startX;
        let scrollLeft;

        const activities = document.querySelector('.activities');

        activities.addEventListener('mousedown', (e) => {
        isDown = true;
        activities.classList.add('active');
        startX = e.pageX - activities.offsetLeft;
        scrollLeft = activities.scrollLeft;
        });
        activities.addEventListener('mouseleave', () => {
        isDown = false;
        activities.classList.remove('active');
        });
        activities.addEventListener('mouseup', () => {
        isDown = false;
        activities.classList.remove('active');
        });
        activities.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - activities.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        activities.scrollLeft = scrollLeft - walk;
        });
    },[])

    return (
        <div className='activities'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    );
};

export default Activities;