import MyBanner from "../../components/banner/MyBanner";
import Heading from "../../components/heading/Heading";
import MenuCards from "../../components/menu-cards/MenuCards";
import useMenu from "../../hooks/useMenu";

const MenuWithCategory = ({ data }) => {
    const { image, title, description, heading, subHeading, category } = data;
    const [loading, menu] = useMenu(category);

    return (
        <>
            <MyBanner image={image} title={title} subTitle={description} />
            <Heading heading={heading} subHeading={subHeading} />
            {!loading && <MenuCards menu={menu} />}
            <button
                // onClick={ViewShortMenu}
                className="uppercase w-fit px-7 py-1 font-semibold border-b-[3px] border-gray-900 rounded-xl my-10 mx-auto block"
            >
                ORDER YOUR FAVOURITE FOOD
            </button>
        </>
    );
};

export default MenuWithCategory;
