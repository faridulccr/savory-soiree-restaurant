import useTitle from "../../hooks/useTitle";
import MenuWithCategory from "./MenuWithCategory";

// images
import img2 from "../../assets/home/chef-service.jpg";
import img1 from "../../assets/menu/banner3.jpg";
import img3 from "../../assets/menu/pizza-bg.jpg";
import img4 from "../../assets/menu/salad-bg.jpg";
import img5 from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
    useTitle("our-menu");

    const menuCategory = [
        {
            image: img1,
            title: "our menu",
            description: "WOULD YOU LIKE TO TRY ANY?",
            heading: "TODAY'S OFFER",
            subHeading: "Don't miss",
            category: "offered",
        },
        {
            image: img2,
            title: "DESSERTS",
            description: "WOULD YOU LIKE TO TRY ANY?",
            heading: "desserts",
            subHeading: "Check it out",
            category: "dessert",
        },

        {
            image: img3,
            title: "pizza",
            description: "WOULD YOU LIKE TO TRY ANY?",
            heading: "pizza",
            subHeading: "Check it out",
            category: "pizza",
        },
        {
            image: img4,
            title: "salads",
            description: "WOULD YOU LIKE TO TRY ANY?",
            heading: "salad",
            subHeading: "Check it out",
            category: "salad",
        },
        {
            image: img5,
            title: "soup",
            description: "WOULD YOU LIKE TO TRY ANY?",
            heading: "soup",
            subHeading: "Check it out",
            category: "soup",
        },
    ];
    return (
        <div>
            {menuCategory.map((item, i) => (
                <MenuWithCategory key={i} data={item} />
            ))}
        </div>
    );
};

export default OurMenu;
