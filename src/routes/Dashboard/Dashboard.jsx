import { AiOutlineMail } from "react-icons/ai";
import {
    FaBook,
    FaBookmark,
    FaCalendarAlt,
    FaHome,
    FaList,
    FaLock,
    FaShoppingCart,
    FaUsers,
    FaWallet,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useSingleUser from "../../hooks/useSingleUser";
import useTitle from "../../hooks/useTitle";
import "./Dashboard.style.css";

const Dashboard = () => {
    useTitle("Dashboard");
    const [isLoading, user] = useSingleUser();

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
                        {!isLoading &&
                            (user?.role === "admin" ? (
                                <>
                                    <li>
                                        <NavLink to="admin-home">
                                            <FaHome /> Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="add-items">
                                            <ImSpoonKnife /> Add Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="manage-items">
                                            <TfiMenuAlt /> Manage Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="manage-bookings">
                                            <FaBook /> Manage Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="all-users">
                                            <FaUsers />
                                            All users
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="user-home">
                                            <FaHome /> User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="reservation">
                                            <FaCalendarAlt /> Reservation
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="payment-history">
                                            <FaWallet /> payment history
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="my-cart">
                                            <FaShoppingCart /> my cart
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="add-review">
                                            <VscPreview />
                                            add review
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="my-booking">
                                            <FaBookmark /> my booking
                                        </NavLink>
                                    </li>
                                </>
                            ))}

                        <hr className="mt-2 mb-8 w-full" />
                        {/* with slash means start from home path (/) */}
                        <li>
                            <NavLink to="/">
                                <FaHome /> home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/our-menu">
                                <FaList /> menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order">
                                <FaLock /> shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <AiOutlineMail /> contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
