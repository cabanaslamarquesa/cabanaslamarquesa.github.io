import React, {useEffect} from 'react';
import Chalet from '../components/Chalet';
import bd from '../hooks/bd'

import chalet1 from '../assets/img/2.jpg';
import chalet2 from '../assets/img/5.jpg';
import chalet3 from '../assets/img/4.jpg';

const Chalets = () => {

    useEffect(()=>{

        window.scrollTo(0,0)

        const object = document.querySelectorAll('.chalet')
    
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

        for (let i = 0; i < object.length; i++) {
            observer.observe(object[i])
        }
    })

    return (
        <div className='chalets--main'>
            <h2>Cabanas</h2>
            <section className='chalets-target'>
                <Chalet 
                    img={bd()['duquesa'].img[0]}
                    subtitle={bd()['duquesa'].title}
                    people={bd()['duquesa'].description[0]}
                    beds={bd()['duquesa'].description[1]}
                    icons={bd()['duquesa'].icons}
                    price={bd()['duquesa'].price}
                    id='duquesa'
                />
            </section>
            <section className='chalets-target'>
                <Chalet 
                    img={bd()['familiar'].img[0]}
                    subtitle={bd()['familiar'].title}
                    people={bd()['familiar'].description[0]}
                    beds={bd()['familiar'].description[1]}
                    icons={bd()['familiar'].icons}
                    price={bd()['familiar'].price}
                    id='familiar'
                />
            </section>
            <section className='chalets-target'>
                <Chalet 
                    img={chalet3}
                    subtitle={bd()['marquesa'].title}
                    people='8'
                    price='$480.000'
                    id='marquesa'
                />
            </section>
            <section className='chalets-target'>
                <Chalet 
                    img={chalet3}
                    subtitle='Cabana Pareja Deluxe'
                    people='3'
                    price='$150.000-$200.000'
                    id='couple-deluxe'
                />
            </section>
            <section className='chalets-target'>
                <Chalet 
                    img={chalet3}
                    subtitle='Cabana para Pareja'
                    people='2'
                    price='$130.000-170.000'
                    id='couple'
                />
            </section>
        </div>
    );
};

export default Chalets;