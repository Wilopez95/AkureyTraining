import React, { Component } from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo.png'


export default class navbar extends Component {
    render() {
        return (
            <div className="navbar__conteiner">
                <div className="navbar__logo">
                    <img src={logo} alt=""  className="navbar__logo--img"/>
                </div>
                <div className="navbar__menu">
                    <ul className="navbar__menu__conteiner">
                        <li><a href="#" className="navbar__menu--iten active">Directorio de Agentes</a></li>
                        <li><a href="#" className="navbar__menu--iten">Contacto</a></li>
                        <li><a href="#" className=" navbar__menu--iten nav__login--btn">Ingresar</a></li>
                    </ul>
                </div>
                <div className="navar__menu_ico">
                    <span className="icon-menu"></span>
                </div>
            </div>
        )
    }
}
