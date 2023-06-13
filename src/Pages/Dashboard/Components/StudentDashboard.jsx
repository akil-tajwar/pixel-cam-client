import React from 'react';

const StudentDashboard = ({dashboard, handleDelete}) => {
    const {itemName, isntructorName, price, image, category, _id} = dashboard;
    return (
        <div className='w-3/4 mx-auto'>
            <div className="border w-full mx-auto border-slate-400">
                <div className='grid grid-cols-9 justify-start items-center p-5'>
                    <p>1</p>
                    <div className='w-20 h-20 flex justify-start items-start'>
                        <img className='w-full h-full object-cover rounded' src={image} alt="" />
                    </div>
                    <p className='col-span-2 text-left'>{itemName}</p>
                    <p className='text-left'>{isntructorName}</p>
                    <p>{category}</p>
                    <p>${price}</p>
                    <p className='flex gap-2 justify-start'>
                        <div><button className='p-1 rounded w-16 bg-[#1d7edd] text-white'>Buy</button></div>
                        <div onClick={() => handleDelete(_id)}><button className='p-1 rounded w-16 bg-red-500 text-white'>Delete</button></div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;