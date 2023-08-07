import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { useAuth } from "../../providers/AuthProvider";

const FoodCard = ({ image, name, description, price, cartId }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const currenLocation = useLocation();
    const [refetch] = useCart();

    const handleAddToCart = async () => {
        if (currentUser) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_SAVORY_SERVER}/api/cart`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            menuId: cartId,
                            name,
                            image,
                            price,
                            email: currentUser.email,
                        }),
                    }
                );
                const data = await response.json();
                // console.log(data);
                if (data.message) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 2500,
                    });
                    refetch(); //update the cart count
                }
            } catch (error) {
                Swal.fire("something was broken!");
                console.log(error);
            }
        } else {
            Swal.fire({
                text: "You have to login first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {
                        state: { from: currenLocation.pathname },
                    });
                }
            });
        }
    };
    return (
        <div className="card shadow-xl bg-[#F3F3F3] rounded-none">
            {price && (
                <p className="bg-[#111827] absolute px-5 py-2 right-4 top-4 text-white">
                    ${price}
                </p>
            )}
            <figure>
                <img className="w-full max-h-80 sm:h-60" src={image} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddToCart}
                        className="btn bg-[#E8E8E8] hover:bg-[#04093f] text-[#BB8506] border-b-2 border-b-[#BB8506] hover:border-b-[#BB8506]"
                    >
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
