import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const ClassCards = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='lg:mt-24 mt-36'>
            <SectionTitle title={'All Classes'}></SectionTitle>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-4 mb-20 w-3/4 mx-auto'>
                {
                    classes.map(item => <div item={item} key={item._id}>
                        <div className='border-2 border-[#171818]'>
                            <div className='w-full h-72 relative'>
                                <img className='w-full h-full object-cover' src={item.image} alt="" />
                            </div>
                            <div className='p-3'>
                                <h3 className='text-4xl font-semibold text-[#2cae74]'>{item.name}</h3>
                                <p className='font-semibold pb-3 text-xl'>Instructor: {item.ins_name}</p>
                                <p className='text-xl'>Available Seats: {item.seats}</p>
                                <p className='text-xl'>Price: ${item.price}</p>
                            </div>
                            <button className='bg-[#2cae74] w-full text-black py-2 text-xl font-semibold'>Select</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ClassCards;