import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='w-3/4 rounded-lg mx-auto mt-24 text-center mb-20'>
            <div className='bg-[url(/public/banner2.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid grid-cols-3 gap-5 justify-center items-center text-white p-20'>
                    <h1 className='text-7xl text-left'>Unleash Your Creative Vision</h1>
                    <div className='col-span-2'>
                        <img className='' src="/public/banner2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[url(/public/banner3.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid grid-cols-3 gap-5 justify-center items-center text-white p-20'>
                    <h1 className='text-7xl text-left'>Capture Moments, Tell Stories</h1>
                    <div className='col-span-2'>
                        <img className='' src="/public/banner3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[url(/public/banner4.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid grid-cols-3 gap-5 justify-center items-center text-white p-20'>
                    <h1 className='text-7xl text-left'>Discover <br /> the Art of Photography</h1>
                    <div className='col-span-2'>
                        <img className='' src="/public/banner4.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[url(/public/banner1.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid grid-cols-3 gap-5 justify-center items-center text-white p-20'>
                    <h1 className='text-7xl text-left'>Unlock Your Potential Skill</h1>
                    <div className='col-span-2'>
                        <img className='' src="/public/banner1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;