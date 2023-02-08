import React, {useEffect} from 'react'
import { Outlet, Link, useParams } from "react-router-dom";
import "../style/Header.scss";

const Header = () => {

  useEffect(()=>{
    loll()
  },[])

  function loll(){
    let url = window.location.pathname
    let items = document.querySelectorAll(".desktop__items__btn")
    let item = document.querySelectorAll(".mobile__items__btn")

    if(url == '/'){
      url = "/home"
    }

    for(var i=0; i<items.length; i++){
      if (url == items[i].classList[1]) {
        items[i].classList.add('active')
        item[i].classList.add('active')
      }
    }
  }

  const openMenu = (e) => {
    let items = document.querySelectorAll(".desktop__items__btn")
    let item = document.querySelectorAll(".mobile__items__btn")
    for(var i = 0; i<items.length; i++){
      items[i].classList.remove('active')
      item[i].classList.remove('active')
    }

    if(e>4){
      loll()
    }
    else{
      items[e].classList.add('active')
    }
    const menu = document.getElementById("nav-menu").classList.toggle("active")
  }

  return (
    <div className="header-container">
      <nav className="nav">
        <section className="nav-bar">
          <div className="nav-bar__logo"> </div>
          <i className='fa-solid fa-bars nav-bar__menu nav-bar__menu--desktop' onClick={() => openMenu(5)}></i>
            <ul className="nav-bar__items--desktop">
              <li className="desktop__items__btn /home"><Link to="/" onClick={() => openMenu(0)}>Inicio</Link></li>
              <li className="desktop__items__btn /about"><Link to="/about" onClick={() => openMenu(1)}>Sobre Nosotros</Link></li>
              <li className="desktop__items__btn /chalets"><Link to="/chalets" onClick={() => openMenu(2)}>Cabañas</Link></li>
              {/* <li className="desktop__items__btn /activities"><Link to="/activities" onClick={() => openMenu(3)}>Actividades</Link></li> */}
              <li className="desktop__items__btn /contact"><Link to="/contact" onClick={() => openMenu(4)}>Contacto</Link></li>
            </ul>
        </section>
        <section className="nav-menu" id="nav-menu">
          <ul className="nav-menu__items--mobile">
            <li className="mobile__items__btn /home"><Link to="/" onClick={() => openMenu(0)}>Inicio </Link></li>
            <li className="mobile__items__btn /about"><Link to="/about" onClick={() => openMenu(1)}>Sobre Nosotros</Link></li>
            <li className="mobile__items__btn /chalet"><Link to="/chalets" onClick={() => openMenu(2)}>Cabañas</Link></li>
            {/* <li className="mobile__items__btn /activities"><Link to="/activities" onClick={() => {this.openMenu()}}>Actividades</Link></li> */}
            <li className="mobile__items__btn /contact"><Link to="/contact" onClick={() => openMenu(4)}>Contacto</Link></li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default Header