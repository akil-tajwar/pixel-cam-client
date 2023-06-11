import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#171818]'>
            <div className='h-fit bg-[url(/public/footer.jpg)] bg-no-repeat bg-center bg-cover text-white p-8'>
                <div className='flex justify-between flex-col gap-20 lg:flex-row w-3/4 mx-auto'>
                    <div>
                        <div className='flex items-center mb-10'>
                            <img className='w-24' src="/logo.png" alt="" />
                        </div>
                        <div>
                            <ul className='mt-6 flex flex-col gap-2'>
                                <li className='flex gap-2 items-center'><MdLocationOn className='text-[#2cae74] text-2xl' /><p>828 Curtis Ferry, New York, USA</p></li>
                                <li className='flex gap-2 items-center'><BsTelephoneFill className='text-[#2cae74] text-xl' /><p>+8 (800) 238 3597 (admin)</p></li>
                                <li className='flex gap-2 items-center'><MdEmail className='text-[#2cae74] text-2xl' /><p>pixelcam@gmail.com</p></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-4xl mb-3 text-[#2cae74]'>Social Links</h2>
                        <p>You can find us from social links given below</p>
                        <div className='flex gap-3 mt-8'>
                            <FaFacebookSquare className='text-[#2cae74] text-4xl' />
                            <RiInstagramFill className='text-[#2cae74] text-4xl' />
                            <FaYoutube className='text-[#2cae74] text-4xl' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-4xl mb-8 font-semibold text-[#2cae74]'>Subscibe</h2>
                        <input className='p-1 mb-3 pl-2 bg-white text-black' type="text" /><br />
                        <button className='bg-[#2cae74] text-[#20252b] font-semibold py-1 px-3'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#111111] text-[#00dcf4] p-3 text-center'>
                <p>© PixelCam Academy 2023 | Created by Akil Tajwar</p>
            </div>
        </div>
    );
};

export default Footer;