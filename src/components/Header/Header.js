import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to={"/shop"}>Shop</NavLink>
                <NavLink to={"/review"}>Order Review</NavLink>
                <NavLink to={"/working"}>How we work</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/about"}>About Ema-John</NavLink>
                {
                    user.email ?
                        <button onClick={logOut}>Logout</button>
                        :
                        <NavLink to={"/login"}>Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;