import React from "react";
import './Header.css';
import MenuListComposition from "../assets/MenuList";
import pactech from '../assets/img/pactech2.png';
import { Link } from 'react-router-dom';

function Header() {
    const cachedUser = localStorage.getItem('usuario');

    return (
        <header className="header">
            <div className="name">
                <Link to='/' className="link">
                    <img src={pactech} alt="Logo" className="logo" />
                    <h2>Announces</h2>
                </Link>

            </div>
            <div className="button_login">
                <h2>Welcome {cachedUser}</h2>
                <MenuListComposition />
            </div>
        </header>
    );
}

export default Header;