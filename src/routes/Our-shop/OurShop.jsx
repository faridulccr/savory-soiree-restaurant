import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OurShop.css";

// custom components
import MyBanner from "../../components/banner/MyBanner";
import useTitle from "../../hooks/useTitle";

import { useState } from "react";
import img from "../../assets/shop/banner2.jpg";

const OurShop = () => {
    useTitle("our-shop");
    const [tabIndex, setTabIndex] = useState(0);
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
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1 </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;
