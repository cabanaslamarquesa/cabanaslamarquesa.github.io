import React from 'react';
import '../style/Services.scss';

const Services = () => {
    return (
    <div className="service" id='service'>
        <ul className="service-list">
            <li className="service-list__items">
                <i className='fa-solid fa-wifi' />
                <p>wi-fi</p>
            </li>
            <li className="service-list__items">
                <i className='fa-solid fa-car'/>
                <p>Parqueadero</p>
            </li>
            <li className="service-list__items">
                <i className='fa-solid fa-broom'/>
                <p>Limpieza</p>
            </li>
            <li className="service-list__items">
                <i className='fa-solid fa-paw'/>
                <p>Pet-Friendly</p>
            </li>
        </ul>
    </div>
    );
};

export default Services;