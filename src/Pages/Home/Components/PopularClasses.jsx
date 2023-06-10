import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(error => console.log(error))
    }, [])
    const popular = classes.filter(item => item.name === 'Popular');
    return (
        <div className='w-3/4 mx-auto'>
            <SectionTitle title={'Popular Classes'}></SectionTitle>
            <div className='grid grid-cols-3 gap-10 mt-4 mb-10 w-3/4 mx-auto'>
                {
                    popular.map(item => <div item={item} key={item._id}>
                        <div className='border-2 border-[#171818]'>
                            <div className='w-full h-full relative'>
                                <img className='w-full h-full object-cover' src={item.image} alt="" />
                            </div>
                            <div className='p-3'>
                                <h3 className='text-3xl font-semibold pb-2'>{item.ins_name}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;