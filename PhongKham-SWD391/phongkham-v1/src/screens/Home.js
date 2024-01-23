import React from 'react';
import '../style/Home.css'
import DefaultTemplate from "../template/DefaultTemplate";
import Slider from '../components/Slider';
import Service from '../components/Service';
import Doctor from '../components/Doctor';

const Home = () => {
    return (
        <DefaultTemplate>
            <Slider></Slider>
            <Service></Service>
            <Doctor></Doctor>
        </DefaultTemplate>
    );
};

export default Home;