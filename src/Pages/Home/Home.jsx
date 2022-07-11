import React from 'react';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import './Home.css';
import Chart from './../../Components/Chart/Chart';
import { userData } from '../../DummyData';
import WidgetLg from '../../Components/WidgetLg/WidgetLg';
import WidgetSm from '../../Components/WidgetSm/WidgetSm';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo></FeaturedInfo>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"></Chart>
            <div className="homeWidgets">
                <WidgetSm></WidgetSm>
                <WidgetLg></WidgetLg>
            </div>
        </div>
    );
};

export default Home;