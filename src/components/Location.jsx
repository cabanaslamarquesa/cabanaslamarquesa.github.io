import React from 'react';
import '../style/Location.scss';

const Location = () => {
    return (
        <div className='location'>
            <h2 className="main-title">Ubicacion</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quia atque perferendis tempore commodi aperiam!</p>
            <iframe className="location__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.3760087200662!2d-76.49627727586727!3d2.3435043048723183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2fff1b45e040e1%3A0x2ce3bd0db2209e27!2sCaba%C3%B1as%20La%20Marquesa%20Hospedaje%20bar!5e0!3m2!1ses!2sco!4v1669306598383!5m2!1ses!2sco" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;