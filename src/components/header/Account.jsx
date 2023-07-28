import Swal from "sweetalert2";
import profile from "../../assets/others/profile.png";
import { useAuth } from "../../providers/AuthProvider";
import "./Account.style.css";
import ActiveRoute from "./ActiveRoute";
const Account = () => {
    const { currentUser, logout } = useAuth();
    // console.log(currentUser?.email);
    const handleLogout = async () => {
        await logout();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logout Successful!",
            showConfirmButton: false,
            timer: 3000,
        });
    };

    return currentUser ? (
        <div className="account">
            <img
                className="account-logo"
                src={currentUser?.photoURL || profile}
                title={currentUser?.displayName}
            />
            <button
                className="text-white font-semibold hover:text-pink-300"
                onClick={handleLogout}
            >
                LOG OUT
            </button>
        </div>
    ) : (
        <ActiveRoute to="/login">LOG IN</ActiveRoute>
    );
};

export default Account;
