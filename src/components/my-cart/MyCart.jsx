import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import trash from "../../assets/icon/trash.svg";
import useCart from "../../hooks/useCart";
import Heading from "../heading/Heading";
import "./MyCart.style.css";

const MyCart = () => {
    const [refetch, isLoading, carts] = useCart();
    const navigate = useNavigate();

    const calculateTotalPrice = (items) => {
        if (items?.length > 0) {
            return items
                .reduce((total, item) => total + item?.price, 0)
                .toFixed(1);
        } else return 0;
    };

    const handlePaybtn = () => {
        const totalPrice = calculateTotalPrice(carts);
        if (totalPrice > 0) {
            navigate("/payment", { state: totalPrice });
        } else {
            Swal.fire("Please add foods before Pay.");
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // sent delete request
                    const response = await fetch(
                        `${import.meta.env.VITE_SAVORY_SERVER}/api/carts/${id}`,
                        { method: "DELETE" }
                    );
                    const data = await response.json();
                    // console.log(response.data);
                    Swal.fire(data.message);
                    refetch();
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    return (
        <div>
            <Heading
                className="mt-5"
                heading="WANNA ADD MORE?"
                subHeading="My Cart"
            />
            <div className="w-5/6 mx-auto bg-white p-8 sm:p-12">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#151515]">
                    <span className="font-['Cinzel'] text-xl font-bold">
                        TOTAL ORDER: {!isLoading && (carts?.length || 0)}
                    </span>
                    <span className="font-['Cinzel'] text-xl font-bold">
                        TOTAL PRICE: ${!isLoading && calculateTotalPrice(carts)}
                    </span>
                    <button
                        onClick={handlePaybtn}
                        className="py-3.5 px-4 rounded-lg bg-[#D1A054] text-sm text-white font-bold"
                    >
                        PAY
                    </button>
                </div>
                <div className="mt-8 overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="rounded-tl-2xl"></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th className="rounded-tr-2xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading &&
                                carts?.length > 0 &&
                                carts.map((item, i) => (
                                    <tr key={Math.random() + i}>
                                        <td className="text-[#151515] text-xl">
                                            {i + 1}
                                        </td>
                                        <td>
                                            <img
                                                className="w-16 h-16"
                                                src={item.image}
                                            />
                                        </td>
                                        <td className="text-[#737373] text-xl">
                                            {item.name}
                                        </td>
                                        <td className="text-[#737373] text-xl">
                                            ${item.price}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleDelete(item._id)
                                                }
                                                className="bg-[#B91C1C] hover:bg-[#560707] w-12 h-12 rounded-md flex justify-center items-center mx-auto"
                                            >
                                                <img
                                                    className="max-w-full"
                                                    src={trash}
                                                    alt=""
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
