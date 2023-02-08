import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style/Chalets.scss';

import barIcon from '../assets/lol.svg';
import tvRetro from '../assets/tv-retro.svg';
const Chalets = (info) => {

    function icons(){
        console.log(1)
        const icons = document.getElementById('lollllll')
        console.log(icons)
        // icons.innerHTML = '<li>holas</li>'

        // if (info.icons != null) {
        //     for (let index = 0; index < info.icons.length; index++) {
        //         if (info.icons[index]==='bar') {
        //             icons.innerHTML +='<li><img src="'+barIcon+'" style="width:20px; height: 20px; border-radius: 4px;" /></li>'
        //         }
        //         if (info.icons[index]==='tv-retro') {
        //             icons.innerHTML +='<li><img src="'+tvRetro+'" style="width:20px; height: 20px; border-radius: 0;" /></li>'
        //         }
        //         if (info.icons[index]==='tv') {
        //             icons.innerHTML +='<li><i class="fa-solid fa-tv"></i></li>'
        //         }
        //         if (info.icons[index]==='shower') {
        //             icons.innerHTML +='<li><i class="fa-solid fa-shower"></i></li>'
        //         }
        //         if (info.icons[index]==='toilet') {
        //             icons.innerHTML +='<li><i class="fa-solid fa-toilet"></i></li>'
        //         }
        //         if (info.icons[index]==='wifi') {
        //             icons.innerHTML +='<li><i class="fa-solid fa-wifi"></i></li>'
        //         }
        //     }
        // }
    }

    return (
        <div className='chalet' id='chalet'>
            <h2 className='main__title'>{info.title}</h2>
            <img src={info.img} alt="" />
            <article className='chalet-information'>
                <h3 className="main__subtitle">{info.subtitle}</h3>
                <p></p>
                <ul className="chalet-information__list">
                    <li>{info.people} <i className="fa-solid fa-user"></i></li>
                    <li>{info.beds} <i className="fa-solid fa-bed"></i></li>
                </ul>
                <ul className="chalet-information__icons" id='lollllll'>
                    {icons()}
                </ul>
            </article>
            <p className="chalet__price">${info.price}</p>
            <Link className='button' to={"/information/"+info.id}>Mas Informacion</Link>
        </div>
    );
};

export default Chalets;