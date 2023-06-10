import React, { useEffect, useState } from 'react';
import Banner from './Components/Banner';
import PopularClasses from './Components/PopularClasses';
import PopularInstructors from './Components/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;