import { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import MenuCards from "../../components/menu-cards/MenuCards";
import useMenu from "../../hooks/useMenu";

const MenuSection = () => {
    const [loading, menu] = useMenu("all");
    const [allMenu, setAllMenu] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        setAllMenu([...menu.slice(0, 6)]);
    }, [menu]);

    const ViewFullMenu = () => {
        setIsShowAll(true);
        setAllMenu(menu);
    };

    const ViewShortMenu = () => {
        setIsShowAll(false);
        setAllMenu([...menu.slice(0, 6)]);
    };

    return (
        <>
            <Heading subHeading="Check it out" heading="From our menu" />
            {!loading && <MenuCards menu={allMenu} />}

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
                        onClick={ViewShortMenu}
                        className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl"
                    >
                        View Short Menu
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
