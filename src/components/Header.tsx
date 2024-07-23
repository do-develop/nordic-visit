import React from 'react';
import { NavLink } from "react-router-dom"; 
import Logo from "../img/nordic-visit-logo.png";
import Destination from '../pages/Destination';

const Header: React.FC = () => {
    //const logo = require("../img/nordic-visit-logo.png");

    return (
        <div className='mx-auto'>
            <nav className="nav">
                <NavLink to="/" className="nav__logo">
                    <img className="size-16" src={Logo} alt="logo"/>
                </NavLink>

                <div className={"nav__menu"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav_item">
                            <NavLink to="/destination" className="nav__link">
                                Destination
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/experience" className="nav__link dropdown">
                                <button className="dropdown-btn">
                                    Experience
                                </button>
                                <ul className="dropdown-content hidden">
                                    <li className="nav_item">
                                        <NavLink to="/" className="nav__link">
                                            What to see
                                        </NavLink>
                                    </li>
                                    <li className="nav_item">
                                        <NavLink to="/" className="nav__link">
                                            What to do
                                        </NavLink>
                                    </li>
                                    <li className="nav_item">
                                        <NavLink to="/" className="nav__link">
                                            What to eat
                                        </NavLink>
                                    </li>
                                </ul>
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/Transportation" className="nav__link">
                                Transportation
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/Accomodation" className="nav__link">
                                Accommodation
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/ContactUs" className="nav__link">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;