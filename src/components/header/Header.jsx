import { useState } from "react";
import Account from "./Account";
import "./Account.style.css";
import ActiveRoute from "./ActiveRoute";
import CartIcon from "./CartIcon";

const Header = () => {
    const [isHideMenu, setIsHideMenu] = useState(true);

    return (
        <header className="header-style max-w-screen-xl mx-auto bg-[rgba(21,21,21,0.5)] h-20 fixed z-[9999999] w-full px-8 pt-3.5 md:pt-4">
            <nav>
                <div className="nav-style flex flex-wrap items-center justify-between mx-auto relative">
                    <a className=" leading-3 sm:leading-tight" href="/">
                        <span className="font-[900] text-[0.8rem] sm:text-[1.3rem] block text-white font-['Cinzel']">
                            SAVORY SOIREE
                        </span>
                        <span className="text-white tracking-[4px] sm:tracking-[5.7px] text-[0.7rem] sm:text-[1.2rem] font-[500] font-['Cinzel']">
                            RESTAURANT
                        </span>
                    </a>
                    <div className="md:hidden flex items-center">
                        <div className=" md:hidden">
                            <CartIcon />
                        </div>
                        <button
                            onClick={() => setIsHideMenu(!isHideMenu)}
                            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg bg-slate-600 hover:bg-slate-900 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`${
                            isHideMenu && "hidden"
                        } md:block bg-[rgba(21,21,21,0.9)] md:bg-[rgba(21,21,21,0)] px-2 md:px-0 py-4 md:py-0 w-44 md:w-auto absolute md:static -right-7 top-[105%] rounded-md`}
                        id="navbar-default"
                    >
                        <ul className="font-['Inter'] text-sm flex flex-col items-center md:flex-row gap-3 md:gap-6">
                            <li>
                                <ActiveRoute to="/">HOME</ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/contact">
                                    CONTACT US
                                </ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="dashboard">
                                    DASHBOARD
                                </ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/our-menu">
                                    OUR MENU
                                </ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/order">
                                    ORDER FOOD
                                </ActiveRoute>
                            </li>
                            <li className="hidden md:block">
                                <CartIcon />
                            </li>
                            <li>
                                <Account />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
