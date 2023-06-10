import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='w-3/4 rounded-lg mx-auto lg:mt-24 mt-36 text-center mb-20'>
            <div className='bg-[url(/public/banner2.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center items-center text-white lg:p-20 p-8'>
                    <h1 className='lg:text-7xl text-4xl lg:text-left'>Unleash Your Creative Vision</h1>
                    <div className='lg:col-span-2'>
                        <img className='' src="/public/banner2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[url(/public/banner3.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center items-center text-white lg:p-20 p-8'>
                    <h1 className='lg:text-7xl text-4xl lg:text-left'>Capture Moments, Tell Stories</h1>
                    <div className='lg:col-span-2'>
                        <img className='' src="/public/banner3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[url(/public/banner4.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center items-center text-white lg:p-20 p-8'>
                    <h1 className='lg:text-7xl text-4xl lg:text-left'>Discover the Art of Photography</h1>
                    <div className='lg:col-span-2'>
                        <img className='' src="/public/banner4.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[url(/public/banner1.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center items-center text-white lg:p-20 p-8'>
                    <h1 className='lg:text-7xl text-4xl lg:text-left'>Unlock Your Potential Skill</h1>
                    <div className='lg:col-span-2'>
                        <img className='' src="/public/banner1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;