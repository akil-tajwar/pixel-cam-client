import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { AuthContext } from '../../Providers/AuthProvider';

const Instructors = () => {
    const { user } = useContext(AuthContext);
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://pixel-cam-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(error => console.log(error))
    })
    return (
        <div className='lg:mt-24 mt-36'>
            <SectionTitle title={'Meet Your Instructors'}></SectionTitle>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-4 mb-20 w-3/4 mx-auto'>
                {
                    instructors.map(item => <div item={item} key={item._id}>
                        <div className='border-2 border-[#171818]'>
                            <div className='w-full h-72 relative'>
                                <img className='w-full h-full object-cover' src={item.image} alt="" />
                            </div>
                            <div className='p-3'>
                                <h3 className='text-4xl font-semibold pb-2 text-[#2cae74]'>{item.name}</h3>
                                <p className='text-xl'>email: {item.email}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;