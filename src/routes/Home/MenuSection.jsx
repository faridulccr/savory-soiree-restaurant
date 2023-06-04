import { useState } from "react";
import Heading from "../../components/heading/Heading";
import MenuCards from "../../components/menu-cards/MenuCards";
import useMenu from "../../hooks/useMenu";

const MenuSection = () => {
    const [loading, menu] = useMenu();
    const [isShowAll, setIsShowAll] = useState(false);
    const popularMenu = menu.filter((item) => item.category === "popular");

    const ViewFullMenu = () => {
        setIsShowAll(true);
    };

    const ViewPopularMenu = () => {
        setIsShowAll(false);
    };

    return (
        <>
            <Heading subHeading="Popular Items" heading="From our menu" />
            {!loading && !isShowAll && <MenuCards menu={popularMenu} />}
            {!loading && isShowAll && <MenuCards menu={menu} />}

            <div className="mt-12 text-center font-['Inter']">
                {!isShowAll && (
                    <button
                        onClick={ViewFullMenu}
                        className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl"
                    >
                        View Full Menu
                    </button>
                )}
                {isShowAll && (
                    <button
                        onClick={ViewPopularMenu}
                        className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl"
                    >
                        View Popular Menu
                    </button>
                )}
            </div>
            <div className=" h-36 sm:h-52 bg-black mt-16 flex justify-center items-center">
                <p className=" bg-black text-white font-bold text-base sm:text-4xl">
                    Call Us: +88{" "}
                    <span className="font-['Raleway']">0192345678910</span>
                </p>
            </div>
        </>
    );
};

export default MenuSection;
