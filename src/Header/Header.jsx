import React from "react";
import './Header.css';
import MenuListComposition from "../assets/MenuList";
import pactech from '../assets/img/pactech2.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const cachedUser = localStorage.getItem('usuario');
    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    };
    return (
        <header className="header">
            <div className="name">
                <img src={pactech} alt="Logo" className="logo" onClick={home} />
                <h2>Announces</h2>
            </div>
            <div className="button_login">
                <h2>{cachedUser ? cachedUser : "Welcome"}</h2>
                <MenuListComposition />
            </div>
        </header>
    );
}

export default Header;