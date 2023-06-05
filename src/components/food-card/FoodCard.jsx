const FoodCard = ({ image, title, description, price }) => {
    return (
        <div className="card shadow-xl bg-[#F3F3F3] rounded-none">
            {price && (
                <p className="bg-[#111827] absolute px-5 py-2 right-4 top-4 text-white">
                    ${price}
                </p>
            )}
            <figure>
                <img className="w-full" src={image} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn bg-[#E8E8E8] hover:bg-[#04093f] text-[#BB8506] border-b-2 border-b-[#BB8506] hover:border-b-[#BB8506]">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
