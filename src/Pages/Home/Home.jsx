import React, { useEffect, useState } from 'react';
import Banner from './Components/Banner';
import PopularClasses from './Components/PopularClasses';
import PopularInstructors from './Components/PopularInstructors';
import Faq from './Components/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Faq></Faq>
        </div>
    );
};

export default Home;