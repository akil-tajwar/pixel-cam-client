import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Components/Banner';
import PopularClasses from './Components/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;