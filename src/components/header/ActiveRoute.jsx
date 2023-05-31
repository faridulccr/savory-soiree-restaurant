/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const ActiveRoute = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-semibold hover:text-pink-300"
                    : "text-white font-semibold hover:text-pink-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;
