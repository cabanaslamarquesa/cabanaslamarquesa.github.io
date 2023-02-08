import React, {useEffect} from 'react';
import '../style/Reservation.scss';

import barIcon from '../assets/lol.svg';
import tvRetro from '../assets/tv-retro.svg';

const Reservation = (i) => {
    useEffect(()=>{
        const images = document.querySelector('.reservation__img')
        for (let index = 0; index < i.img.length; index++) {
            images.innerHTML += '<img src="'+i.img[index]+'" alt="" onclick="console.log(this.classList.toggle('+"'active'"+'))"/>'
        }

        const icons = document.querySelector('.reservation__icons')
        for (let index = 0; index < i.icons.length; index++) {
            if (i.icons[index]==='bar') {
                icons.innerHTML +='<li><img src="'+barIcon+'" style="width:20px; height: 20px; border-radius: 4px;" /></li>'
            }
            if (i.icons[index]==='tv-retro') {
                console.log(i.icons[index])
                icons.innerHTML +='<li><img src="'+tvRetro+'" style="width:20px; height: 20px; border-radius: 0;" /></li>'
            }
            if (i.icons[index]==='tv') {
                console.log(i.icons[index])
                icons.innerHTML +='<li><i class="fa-solid fa-tv"></i></li>'
            }
            if (i.icons[index]==='shower') {
                console.log(i.icons[index])
                icons.innerHTML +='<li><i class="fa-solid fa-shower"></i></li>'
            }
            if (i.icons[index]==='toilet') {
                console.log(i.icons[index])
                icons.innerHTML +='<li><i class="fa-solid fa-toilet"></i></li>'
            }
            if (i.icons[index]==='wifi') {
                console.log(i.icons[index])
                icons.innerHTML +='<li><i class="fa-solid fa-wifi"></i></li>'
            }
        }

        window.scrollTo(0,0)

        const object1 = document.getElementById('reservation__img')
        const object2 = document.getElementById('reservation-container')
    
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
        threshold: 0.2
        })
    
        observer.observe(object1)
        observer.observe(object2)

    },[])

    return (
        <div className='reservation'>
            <h2>{i.title}</h2>
            <div className="reservation__img" id='reservation__img'>
            </div>
            <div className="reservation-container" id='reservation-container'>
                <article>
                    <div>
                        <h3>Descripcion</h3>
                        <ul className='reservation__description'>
                            <li>{i.description[0]} <i class="fa-solid fa-user"></i></li>
                            <li>{i.description[1]} <i class="fa-solid fa-bed"></i></li>
                            <li>{i.description[2]} <i class="fa-solid fa-restroom"></i></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Informacion</h3>
                        <p>{i.information}</p>
                    </div>
                    <div>
                        <h3>Servicios</h3>
                        <ul className='reservation__icons'>
                        </ul>
                    </div>
                    <div>
                        <h3>Entrada y Salida</h3>
                        <p>2pm</p>
                        <p>11am</p>
                    </div>
                </article>
                <section>
                    <div>
                        <h3>${i.price}</h3>
                        <p>por noche</p>
                    </div>
                    <ul>
                        <li>Desayuno Incluido</li>
                    </ul>
                    <a href="">Reserva Ahora</a>
                </section>
            </div>
        </div>
    );
};

export default Reservation;