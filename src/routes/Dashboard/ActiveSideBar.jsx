/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const ActiveRoute = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "active" : "")}
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;
