import MyBanner from "../../components/banner/MyBanner";
import Heading from "../../components/heading/Heading";
import MenuCards from "../../components/menu-cards/MenuCards";
import useTitle from "../../hooks/useTitle";

// images
import img2 from "../../assets/home/chef-service.jpg";
import img1 from "../../assets/menu/banner3.jpg";
import img3 from "../../assets/menu/pizza-bg.jpg";
import img4 from "../../assets/menu/salad-bg.jpg";
import img5 from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
    useTitle("our-menu");

    const menus = [
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
    return (
        <div>
            <MyBanner
                image={img1}
                title="our menu"
                subTitle="would you like to try any?"
            />
            <Heading heading="TODAY'S OFFER" subHeading="Don't miss" />
            <MenuCards data={menus} />
            <button
                // onClick={ViewShortMenu}
                className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl my-10 mx-auto block"
            >
                ORDER YOUR FAVOURITE FOOD
            </button>

            <MyBanner
                image={img2}
                title="desserts"
                subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCards data={menus} />
            <button
                // onClick={ViewShortMenu}
                className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl my-10 mx-auto block"
            >
                ORDER YOUR FAVOURITE FOOD
            </button>

            <MyBanner
                image={img3}
                title="pizza"
                subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCards data={menus} />
            <button
                // onClick={ViewShortMenu}
                className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl my-10 mx-auto block"
            >
                ORDER YOUR FAVOURITE FOOD
            </button>

            <MyBanner
                image={img4}
                title="salads"
                subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCards data={menus} />
            <button
                // onClick={ViewShortMenu}
                className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl my-10 mx-auto block"
            >
                ORDER YOUR FAVOURITE FOOD
            </button>

            <MyBanner
                image={img5}
                title="salads"
                subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCards data={menus} />
            <button
                // onClick={ViewShortMenu}
                className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl my-10 mx-auto block"
            >
                ORDER YOUR FAVOURITE FOOD
            </button>
        </div>
    );
};

export default OurMenu;
