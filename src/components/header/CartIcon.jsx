import { Link } from "react-router-dom";
import cart_icon from "../../assets/icon/cart-icon.gif";
import useCart from "../../hooks/useCart";

const CartIcon = () => {
    const [, isLoading, carts] = useCart();

    return (
        <Link
            className="bg-[rgba(252,203,5,0.7)] flex px-1 rounded items-center"
            to="/dashboard/my-cart"
        >
            <img className="w-8" src={cart_icon} alt="" />
            <span className="bg-[rgba(230,56,181,0.75)] rounded-full px-2 text-white text-sm">
                {!isLoading && `+${carts?.length || 0}`}
                {isLoading && "+0"}
            </span>
        </Link>
    );
};

export default CartIcon;
