import { useEffect, useState } from "react";
import img from "../../assets/menu-item.png";
import Heading from "../../components/heading/Heading";
const data = [
    {
        id: 1,
        name: "ROAST DUCK BREAST",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry saucez",
        price: 14.5,
    },
    {
        id: 2,
        name: "TUNA NIÇOISE",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 12.5,
    },
    {
        id: 3,
        name: "ESCALOPE DE VEAU ",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 13.5,
    },
    {
        id: 4,
        name: "CHICKEN AND WALNUT SALAD",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 15,
    },
    {
        id: 5,
        name: "FISH PARMENTIER",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 13,
    },
    {
        id: 6,
        name: "ROASTED PORK BELLY",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 20,
    },
    {
        id: 1,
        name: "ROAST DUCK BREAST",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry saucez",
        price: 14.5,
    },
    {
        id: 2,
        name: "TUNA NIÇOISE",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 12.5,
    },
    {
        id: 3,
        name: "ESCALOPE DE VEAU ",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 13.5,
    },
    {
        id: 4,
        name: "CHICKEN AND WALNUT SALAD",
        description:
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        price: 15,
    },
];

const MenuSection = () => {
    const [menus, setMenus] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        setMenus([...data.slice(0, 6)]);
    }, []);

    const ViewFullMenu = () => {
        setIsShowAll(true);
        setMenus(data);
    };

    const ViewShortMenu = () => {
        setIsShowAll(false);
        setMenus([...data.slice(0, 6)]);
    };

    return (
        <>
            <Heading subHeading="Check it out" heading="From our menu" />
            <div className="grid md:grid-cols-2 gap-5 px-4 xl:px-0">
                {Array.isArray(menus) &&
                    menus.map(({ id, name, description, price }) => (
                        <div
                            key={id}
                            className="grid grid-cols-[auto_1fr] items-center gap-5"
                        >
                            <img className="w-28 h-24" src={img} alt="" />
                            <div className="grid grid-cols-[1fr_auto] gap-0">
                                <div>
                                    <h3 className=" uppercase font-['Cinzel'] font-semibold">
                                        {name} ------------------
                                    </h3>
                                    <p>{description}</p>
                                </div>
                                <p className="text-[#BB8506]">${price}</p>
                            </div>
                        </div>
                    ))}
            </div>

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
