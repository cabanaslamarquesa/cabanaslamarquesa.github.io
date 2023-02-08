import React, {useEffect} from 'react';
import '../style/AboutUs.scss';
import img from '../assets/img/1.jpg'

const AboutUs = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='about-us--main' id='about-us--main'>
            <section>
                <h2 className='main__title'>Acerca de Nosotros</h2>
                <img src={img} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem modi soluta tempora iusto similique sapiente aspernatur debitis dolorum at enim dolor ratione, atque exercitationem. Velit assumenda ipsam impedit accusantium quisquam.</p>
            </section>
        </div>
    );
};

export default AboutUs;