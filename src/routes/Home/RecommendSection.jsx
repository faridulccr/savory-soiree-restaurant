import Heading from "../../components/heading/Heading";

import img1 from "../../assets/menu/pizza-bg.jpg";
import img2 from "../../assets/menu/salad-bg.jpg";
import img3 from "../../assets/menu/soup-bg.jpg";

const RecommendSection = () => {
    return (
        <div>
            <Heading subHeading="Should Try" heading="CHEF RECOMMENDS" />
            <div className="grid px-5 xl:px-0 sm:grid-cols-3 justify-between gap-5 md:gap-10">
                <div className="card shadow-xl bg-[#F3F3F3]">
                    <figure>
                        <img src={img1} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">
                            Caeser Pizza
                        </h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast
                            Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn border-[#E8E8E8] hover:border-none bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506]">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl bg-[#F3F3F3]">
                    <figure>
                        <img src={img2} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">
                            Caeser Salad
                        </h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast
                            Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn border-[#E8E8E8] hover:border-none bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506]">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl bg-[#F3F3F3]">
                    <figure>
                        <img src={img3} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">
                            Caeser Soup
                        </h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast
                            Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn border-[#E8E8E8] hover:border-none bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506]">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendSection;
