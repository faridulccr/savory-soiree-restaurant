import { Outlet } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ActiveSideBar from "./ActiveSideBar";
import "./Dashboard.style.css";

const Dashboard = () => {
    useTitle("Dashboard");
    return (
        <div id="dashboard">
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content min-h-screen bg-[#F6F6F6]">
                    <div className="text-center  lg:hidden">
                        <label
                            htmlFor="my-drawer-2"
                            className="my-4 btn bg-[#8e0bd4] text-white drawer-button"
                        >
                            Open Side Menu
                        </label>
                    </div>

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu px-6 pt-12 w-60 sm:w-72 min-h-full bg-[#d1a054]">
                        <a className="ps-2.5 leading-tight mb-16" href="/">
                            <span className="font-[900] text-[1.3rem] block text-[#151515] font-['Cinzel']">
                                SAVORY SOIREE
                            </span>
                            <span className="text-[#151515] tracking-[5.7px] text-[1.2rem] font-[500] font-['Cinzel']">
                                RESTAURANT
                            </span>
                        </a>
                        {/* without slash means start from current path (dashboard) */}
                        <li>
                            <ActiveSideBar to="user-home">
                                User Home
                            </ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="reservation">
                                Reservation
                            </ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="payment-history">
                                payment history
                            </ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="my-cart">my cart</ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="add-review">
                                add review
                            </ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="my-booking">
                                my booking
                            </ActiveSideBar>
                        </li>
                        <hr className="mt-2 mb-8 w-full" />
                        {/* with slash means start from home path (/) */}
                        <li>
                            <ActiveSideBar to="/">home</ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="/our-menu">menu</ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="/order">shop</ActiveSideBar>
                        </li>
                        <li>
                            <ActiveSideBar to="/contact">contact</ActiveSideBar>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
