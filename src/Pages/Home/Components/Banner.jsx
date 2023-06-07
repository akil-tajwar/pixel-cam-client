import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='w-3/4 mx-auto mt-16 text-center mb-20'>
            <div>
                <img className='rounded-lg' src="/public/banner2.jpg" />
            </div>
            <div>
                <img className='rounded-lg' src="/public/banner3.jpg" />
            </div>
            <div>
                <img className='rounded-lg' src="/public/banner4.jpg" />
            </div>
            <div>
                <img className='rounded-lg' src="/public/banner1.jpg" />
            </div>
        </Carousel>
    );
};

export default Banner;