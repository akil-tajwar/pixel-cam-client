import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(error => console.log(error))
    }, [])
    const popular = instructors.filter(item => item.category === 'Popular');
    return (
        <div>
            <SectionTitle title={'Popular Instructors'}></SectionTitle>
            <div className='grid grid-cols-3 gap-10 mt-4 mb-20 w-3/4 mx-auto'>
                {
                    popular.map(item => <div item={item} key={item._id}>
                        <div className='border-2 border-[#171818]'>
                            <div className='w-full h-72 relative'>
                                <img className='w-full h-full object-cover' src={item.image} alt="" />
                            </div>
                            <div className='p-3'>
                                <h3 className='text-3xl font-semibold pb-2'>{item.name}</h3>
                                <p>email: {item.email}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;