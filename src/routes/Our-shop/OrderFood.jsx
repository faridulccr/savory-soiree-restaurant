import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img from "../../assets/shop/banner2.jpg";
import MyBanner from "../../components/banner/MyBanner";
import useMenu from "../../hooks/useMenu";
import useTitle from "../../hooks/useTitle";
import "./OurShop.css";
import TabCards from "./TabCards";

const OrderFood = () => {
    useTitle("our-shop");
    const [loading, menu] = useMenu();
    const { category } = useParams();
    const allMenu = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];
    const initialIndex = allMenu.indexOf(category);
    const [tabIndex, setTabIndex] = useState(
        initialIndex > -1 ? initialIndex : 0
    );

    const findMenuByCategory = (c) => {
        return menu.filter((item) => item.category === c);
    };

    return (
        <div>
            <MyBanner
                image={img}
                title="order food"
                subTitle="would you like try a dish?"
            />
            <div>
                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList>
                        <Tab>Salads</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Offered</Tab>
                    </TabList>

                    {!loading &&
                        allMenu.map((c, i) => (
                            <TabPanel key={i}>
                                <TabCards menu={findMenuByCategory(c)} />
                            </TabPanel>
                        ))}
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;
