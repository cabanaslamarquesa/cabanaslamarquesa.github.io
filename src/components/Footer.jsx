import React from 'react';
import '../style/Footer.scss';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="foot">
                <div className="foot-contain">
                    <h4 className="foot__title">Contacto</h4>
                    <div className="foot__information"> 
                        <p>info: cabans@cabanas.com</p>
                        <p>tel: 3203020302</p>
                    </div>
                    <ul className="foot__list"> 
                        <li className="facebook"><a className="fa-brands fa-facebook-f" href=""></a></li>
                        <li className="instagram"><a className="fa-brands fa-instagram" href=""></a></li>
                        <li className="twitter"><a className="fa-brands fa-twitter" href=""></a></li>
                    </ul>
                </div>
                <div className="foot-contain">
                    <h4 className="foot__title">Direccion</h4>
                    <p className="foot--address__information">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="foot-contain"> 
                    <h4 className="foot__title">Aceptamos </h4>
                    <ul className="foot__list">
                        <li>icon </li>
                        <li>icon</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;