import featuredImg from "../../assets/home/featured.jpg";
import Heading from "../../components/heading/Heading";
import "./FeaturedItem.css";

const FeaturedItem = () => {
    return (
        <div className="featured-item sm:px-24 pt-1 text-white pb-12 mt-20">
            <Heading subHeading="Check it out" heading="Featured Item" />
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center justify-center w-4/5 sm:w-full mx-auto">
                <img className="h-auto" src={featuredImg} alt="" />
                <div>
                    <h4>March 20, 2023</h4>
                    <h3 className=" text-2xl">WHERE CAN I GET SOME?</h3>
                    <p className=" mb-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod
                        nobis quas quasi. Eaque repellat recusandae ad
                        laudantium tempore consequatur consequuntur omnis ullam
                        maxime tenetur.
                    </p>
                    <button
                        // onClick={ViewFullMenu}
                        className="uppercase hover:bg-[#1F2937] hover:border-none w-fit px-7 py-1 hover:py-2 font-semibold border-b-[3px] border-white rounded-xl"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
